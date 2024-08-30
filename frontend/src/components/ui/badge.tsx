import { cn } from '@/lib/utils'
import type { BadgeType } from '@/types'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

interface BadgeProps extends BadgeType {
  earned: boolean
  handleClick?: (badge: BadgeType) => void
  className?: string
  showRewardDetails?: boolean
}

export const getInitialsFromTitle = (title: string) => {
  const words = title.split(' ')
  return words
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

const Badge = ({
  id,
  title,
  actions,
  img_url,
  reward,
  reward_details,
  handleClick,
  earned,
  className,
  showRewardDetails = false,
}: BadgeProps) => {
  const numActions = actions?.length
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          'flex min-w-44 flex-col items-center rounded-xl bg-elevation-3 font-medium',
          className,
          {
            'border border-success-primary': earned,
          },
        )}
        onClick={() =>
          handleClick?.({ title, id, img_url, actions, reward, reward_details })
        }
      >
        <div
          className={cn(
            'flex w-full items-center justify-between rounded-t-xl bg-elevation-2 p-2 text-xs',
            {
              'justify-center': !numActions,
            },
          )}
        >
          <p className="text-text-primary">{title}</p>
          {numActions ? (
            <p className="text-text-secondary">{numActions} Actions</p>
          ) : null}
        </div>
        <div className="flex w-full items-center justify-center py-6">
          <Avatar className="flex aspect-square size-16 items-center justify-center">
            <AvatarImage
              className={cn('size-full object-fill', {
                'grayscale filter': !earned,
              })}
              src={img_url}
            />
            <AvatarFallback>{getInitialsFromTitle(title)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex w-full flex-grow items-center justify-center rounded-b-xl bg-success-tertiary p-2">
          <p className="text-xs text-success-primary">{reward}</p>
        </div>
      </div>
      {showRewardDetails ? (
        <div className="flex flex-col items-center justify-center text-center text-xs">
          <p className="font-medium text-text-primary">Reward Details</p>
          <p className="font-normal text-text-secondary">{reward_details}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Badge
