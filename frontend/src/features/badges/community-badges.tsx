import Badge from '@/components/ui/badge'
import type { BadgeType } from '@/types'

import { hasEarned } from './utils'

interface CommunityBadgesProps {
  badges: BadgeType[]
  handleClickBadge: (badge: BadgeType) => void
}

const CommunityBadges = ({
  badges,
  handleClickBadge,
}: CommunityBadgesProps) => {
  return (
    <div className="flex w-full flex-col rounded-xl bg-elevation-1">
      <div className="flex items-center rounded-t-xl bg-elevation-2 p-4 text-xs font-medium text-text-primary">
        Community Badges
      </div>
      <div className="flex flex-col items-start gap-4 p-4 pb-2">
        <div className="flex w-full flex-wrap items-center gap-2 overflow-x-scroll sm:flex-nowrap">
          {badges.map(badge => (
            <Badge
              key={badge.id}
              {...badge}
              earned={hasEarned(badge.actions)}
              handleClick={handleClickBadge}
              className="cursor-pointer"
              active
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommunityBadges
