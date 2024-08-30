'use client'

import { z } from 'zod'
import { formatUnits } from 'viem'

import { getLogsQueryOptions, type RawLogs } from '@/queries/logs'
import type { ActivityType, LatestActitivitiesTableData } from '@/types'
import { useQuery } from '@tanstack/react-query'
import {
  DEFAULT_DECIMALS,
  DEFAULT_PAGE_LIMIT,
  DEFAULT_PAGE_NUMBER,
} from '@/constants'
import { DataTable } from '@/components/ui/data-table'
import { getColumns } from './columns'
import { useState } from 'react'
import useReactQuerySubscription from '@/hooks/use-react-query-subscription'
import { toast } from 'sonner'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const ZodAddress = z.string().startsWith('0x', 'Invalid Address')

const RawLogDecodedSchema = z.object({
  to: ZodAddress,
  method: z.enum(['mint', 'burn', 'swap']),
  sender: ZodAddress,
  amount0In: z.coerce.number().nonnegative().int(),
  amount1In: z.coerce.number().nonnegative().int(),
  amount0Out: z.coerce.number().nonnegative().int(),
  amount1Out: z.coerce.number().nonnegative().int(),
})

const RawLogSchema = z.object({
  address: ZodAddress,
  block_number: z.number().nonnegative().int(),
  block_timestamp: z.string().datetime({ offset: true }),
  decoded: RawLogDecodedSchema,
  from: ZodAddress,
  to: ZodAddress,
  transaction_hash: ZodAddress,
})

function transformLatestActivitiesData(
  data: RawLogs,
): LatestActitivitiesTableData[] {
  return data
    .map(log => {
      const result = RawLogSchema.safeParse(log)
      if (result.success) {
        const parsedLog = result.data
        const activity = capitalize(parsedLog.decoded.method) as ActivityType
        const amount = formatUnits(
          BigInt(parsedLog.decoded.amount0In || parsedLog.decoded.amount0Out),
          DEFAULT_DECIMALS,
        )
        const parsedAmt = String(Math.round(Number(amount)))
        const timestamp = parsedLog.block_timestamp
        const txId = parsedLog.transaction_hash
        return { activity, amount: parsedAmt, timestamp, txId }
      }
    })
    .filter(Boolean) as LatestActitivitiesTableData[]
}

const LatestActivities = () => {
  const [pagination, setPagination] = useState({
    pageIndex: DEFAULT_PAGE_NUMBER,
    pageSize: DEFAULT_PAGE_LIMIT,
  })

  const { data, isLoading, isRefetching } = useQuery(
    getLogsQueryOptions(pagination.pageIndex, pagination.pageSize),
  )

  useReactQuerySubscription()
  const [_, copy] = useCopyToClipboard()

  const transformedData = transformLatestActivitiesData(data?.logs ?? [])
  const totalPages = data?.logs_aggregate.aggregate?.count
    ? Math.floor(
        Number(data?.logs_aggregate.aggregate?.count) / DEFAULT_PAGE_LIMIT,
      )
    : undefined

  if (!isLoading && isRefetching) {
    toast.info('New activity created!')
  }

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success(`Copied TX ID ${text} to clipboard!`)
      })
      .catch(() => {
        toast.error('Error while copying to clipboard')
      })
  }

  const columns = getColumns(handleCopy)

  return (
    <div>
      <DataTable
        isLoading={isLoading}
        isRefetching={isRefetching}
        data={transformedData}
        columns={columns}
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
      />
    </div>
  )
}

export default LatestActivities
