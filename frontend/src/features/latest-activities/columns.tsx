import type { ColumnDef } from '@tanstack/react-table'
import { LiaBurnSolid } from 'react-icons/lia'
import { RiExternalLinkLine } from 'react-icons/ri'
import { MdOutlineGeneratingTokens, MdOutlineSwapHoriz } from 'react-icons/md'

import { ActivityType, type LatestActitivitiesTableData } from '@/types'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function shortenTxId(txId: string) {
  return `${txId.slice(0, 6)}...${txId.slice(-4)}`
}

const ACTIVITY_ICON_MAP = {
  [ActivityType.Mint]: (
    <MdOutlineGeneratingTokens className="size-4 text-text-primary" />
  ),
  [ActivityType.Burn]: <LiaBurnSolid className="size-4 text-text-primary" />,
  [ActivityType.Swap]: (
    <MdOutlineSwapHoriz className="size-4 text-text-primary" />
  ),
}

function getDateAndTime(timestamp: string) {
  const rawDate = new Date(timestamp)
  return {
    date: rawDate.toLocaleDateString('en-SG').replaceAll('/', '.'),
    time: rawDate.toLocaleTimeString('en-SG', { hour12: false }),
  }
}

export const getColumns = (
  handleCopy: (text: string) => () => void,
): ColumnDef<LatestActitivitiesTableData>[] => [
  {
    id: 'activity',
    accessorKey: 'activity',
    header: 'Activities',
    cell: ({ row }) => (
      <div className="flex items-center gap-1 text-text-primary">
        {ACTIVITY_ICON_MAP[row.original.activity]}
        <span className="text-sm font-medium">{row.original.activity}</span>
      </div>
    ),
  },
  {
    id: 'points',
    accessorKey: 'amount',
    header: 'Points',
    cell: ({ row }) => (
      <div className="flex w-12 items-center justify-center rounded-3xl bg-success-tertiary px-2 py-1 text-xs font-medium text-success-primary">
        +{row.original.amount}
      </div>
    ),
  },
  {
    id: 'timestamp',
    accessorKey: 'timestamp',
    header: 'Date',
    cell: ({ row }) => {
      const { date, time } = getDateAndTime(row.original.timestamp)
      return (
        <div className="flex items-center gap-1 text-text-secondary">
          <span className="text-sm">{date}</span>
          <div className="flex items-center justify-center rounded-3xl bg-elevation-3 px-2 py-1 text-xs font-medium">
            {time}
          </div>
        </div>
      )
    },
  },
  {
    id: 'txId',
    accessorKey: 'txId',
    header: 'TXID',
    cell: ({ row }) => (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-text-secondary">
          <span className="text-sm">{shortenTxId(row.original.txId)}</span>
          <Button
            size="sm"
            className="rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary"
            onClick={handleCopy(shortenTxId(row.original.txId))}
          >
            Copy
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            toast.info('Etherscan link not available yet')
          }}
        >
          <RiExternalLinkLine className="size-4 text-text-primary" />
        </Button>
      </div>
    ),
  },
]
