'use client'

import { useState } from 'react'

import Nav from '@/components/ui/nav'
import LatestActivities from '@/features/latest-activities'
import Badges from '@/features/badges'
import { ACHIEVEMENT_BADGES, COMMUNITY_BADGES } from '@/mock'
import CommunityBadges from '@/features/badges/community-badges'
import Footer from '@/components/ui/footer'
import type { BadgeType } from '@/types'

const badges = [...ACHIEVEMENT_BADGES, ...COMMUNITY_BADGES]

export default function Home() {
  const [activeBadge, setActiveBadge] = useState<BadgeType>(badges[0]!)

  function handleClickBadge(badge: BadgeType) {
    setActiveBadge(badge)
  }

  return (
    <div>
      <Nav />
      <div className="flex flex-col gap-6 px-4 py-10 font-medium text-text-secondary sm:px-28">
        <section className="flex flex-col flex-wrap gap-4">
          <h6>Latest Activities</h6>
          <LatestActivities />
        </section>
        <section className="flex flex-col flex-wrap gap-4">
          <h6>Badges</h6>
          <Badges
            handleClickBadge={handleClickBadge}
            badges={badges}
            activeBadge={activeBadge}
          />
          <CommunityBadges
            handleClickBadge={handleClickBadge}
            badges={badges}
          />
        </section>
      </div>
      <Footer />
    </div>
  )
}
