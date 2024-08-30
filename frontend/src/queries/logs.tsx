import { graphql, type ResultOf } from '@/graphql/gql'
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_LIMIT } from '@/constants'

import { getBaseQueryOptions } from '.'

const getLogsQuery = graphql(`
  query Logs($offset: Int!, $limit: Int!) {
    logs(order_by: { block_timestamp: desc }, offset: $offset, limit: $limit) {
      address
      block_number
      block_timestamp
      decoded
      from
      to
      transaction_hash
    }
    logs_aggregate {
      aggregate {
        count
      }
    }
  }
`)

export type RawLogs = ResultOf<typeof getLogsQuery>['logs']

export const getLogsQueryOptions = (
  page = DEFAULT_PAGE_NUMBER,
  limit = DEFAULT_PAGE_LIMIT,
) => {
  const offset = page * limit

  return getBaseQueryOptions({
    document: getLogsQuery,
    variables: { offset, limit },
  })
}

export { getLogsQuery }
