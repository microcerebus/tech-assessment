import { cn } from '@/lib/utils'
import type { ActionType } from '@/types'
import React from 'react'

type Props = {
  actions: ActionType[]
}

const Action = ({ description, completed }: ActionType) => {
  return (
    <div className="flex h-24 basis-1/3 flex-col items-center gap-2 rounded-xl bg-elevation-1 p-0 text-sm text-text-secondary">
      <div className="flex w-full items-center justify-between rounded-xl bg-elevation-1 px-4 py-2 font-medium">
        <p>Action</p>
        {completed ? (
          <Chip className="bg-success-tertiary text-xs text-success-primary">
            Completed
          </Chip>
        ) : null}
      </div>
      <div className="w-full rounded-xl bg-elevation-2 px-4 py-2 font-normal">
        {description}
      </div>
    </div>
  )
}

const Chip = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => (
  <div
    className={cn(
      'flex rounded-3xl bg-elevation-3 px-2 py-1 text-text-secondary',
      className,
    )}
  >
    {children}
  </div>
)

const ActionDetails = ({ actions }: Props) => {
  const numCompleted = actions.filter(action => action.completed).length
  const total = actions.length
  const totalEarnings = actions.reduce((acc, action) => acc + action.points, 0)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-stretch justify-between sm:flex-row sm:items-center">
        <div>
          <span className="font-semibold text-text-primary">How to Earn:</span>{' '}
          <span className="font-normal text-text-secondary">
            Complete the actions for the badge, no specific order needed.
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 sm:justify-normal">
          <Chip className="grow">
            {numCompleted}/{total} Completed
          </Chip>
          <Chip className="grow bg-primary-disabled text-primary-hover sm:grow-0">
            Total Earnings: {totalEarnings}
          </Chip>
        </div>
      </div>
      <div className="my-3 flex items-center justify-between gap-4">
        {actions.map((action, index) => (
          <Action key={`${index}`} {...action} />
        ))}
      </div>
      <div className="my-2 flex items-center justify-between gap-4">
        {actions.map((action, index) => (
          <div
            key={`${index}`}
            className={cn('flex h-1 w-full basis-1/3 rounded-3xl', {
              'bg-primary': action.completed,
            })}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ActionDetails
