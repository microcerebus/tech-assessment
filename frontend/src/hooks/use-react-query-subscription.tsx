import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

const useReactQuerySubscription = () => {
  const queryClient = useQueryClient()
  let count: number | undefined = undefined

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/v1/graphql', 'graphql-ws')

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'connection_init',
          payload: {
            headers: {
              'x-hasura-admin-secret':
                process.env['NEXT_PUBLIC_HASURA_ADMIN_SECRET']!,
            },
          },
        }),
      )

      ws.send(
        JSON.stringify({
          id: '1',
          type: 'start',
          payload: {
            variables: {},
            extensions: {},
            operationName: 'GetLogsSubscription',
            query: `subscription GetLogsSubscription {
                        logs_aggregate {
                            aggregate {
                                count
                            }
                        }
                    }`,
          },
        }),
      )

      console.log('Connected to WebSocket!')
    }

    ws.onmessage = event => {
      const data = JSON.parse(event.data)
      if (data.payload) {
        const shouldInvalidate =
          data.payload.data.logs_aggregate.aggregate.count > 0 &&
          count !== data.payload.data.logs_aggregate.aggregate.count

        if (shouldInvalidate) {
          queryClient.invalidateQueries({
            predicate: query => {
              return query.queryKey[1] === 'Logs'
            },
          })
          count = data.payload.data.logs_aggregate.aggregate.count
        }
      }
    }

    return () => {
      ws.close()
    }
  }, [queryClient])
}

export default useReactQuerySubscription
