import { API_URL } from '@/constants'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
  type DefaultError,
  type QueryKey,
  queryOptions,
  type UseQueryOptions,
} from '@tanstack/react-query'
import { type DirectiveDefinitionNode } from 'graphql'
import { GraphQLClient, type RequestOptions } from 'graphql-request'

/**
 * Source: https://github.com/dotansimha/graphql-code-generator/discussions/9571
 */

export const getKey = <TData = unknown, TVariables = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
) => [(document.definitions?.[0] as DirectiveDefinitionNode)?.name.value]

export interface MakeBaseQueryOptionsArgs<
  TResult,
  TVariables = unknown,
  TError = DefaultError,
> {
  document: TypedDocumentNode<TResult, TVariables>
  variables?: TVariables
  options?: Omit<UseQueryOptions<TResult, TError>, 'queryKey'>
  requestHeaders?: RequestOptions['requestHeaders']
  queryKey?: QueryKey
}

export const getBaseQueryOptions = <
  TResult,
  TVariables = unknown,
  TError = DefaultError,
>({
  document,
  variables,
  options,
  requestHeaders,
  queryKey,
}: MakeBaseQueryOptionsArgs<TResult, TVariables, TError>) => {
  const url = API_URL

  const headers = {
    ...requestHeaders,
    'x-hasura-admin-secret': process.env['NEXT_PUBLIC_HASURA_ADMIN_SECRET']!,
  }

  return queryOptions({
    ...(options && { options }),
    queryKey: [url, ...getKey(document), queryKey ?? variables, headers],
    queryFn: async ({ signal }) => {
      const client = new GraphQLClient(url, { signal, headers })
      return await client.request({
        document,
        ...(variables && { variables }),
        ...headers,
      })
    },
  })
}
