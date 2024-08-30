'use client'
import { type EmblaCarouselType, type EmblaEventType } from 'embla-carousel'

import Badge from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import type { ActionType, BadgeType } from '@/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import ActionDetails from './action-details'

interface BadgesProps {
  badges: BadgeType[]
  activeBadge: BadgeType
  handleClickBadge: (badge: BadgeType) => void
}

export function hasEarned(actions?: ActionType[]) {
  if (!actions) return false
  return actions.every(action => action.completed)
}

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const Badges = ({ badges, activeBadge, handleClickBadge }: BadgesProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  const activeBadgeIndex = badges.findIndex(
    badge => badge.id === activeBadge.id,
  )

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap?.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`
          }
        })
      })
    },
    [],
  )

  useEffect(() => {
    if (!api) return

    setTweenNodes(api)
    setTweenFactor(api)
    tweenScale(api)

    api
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)

    if (activeBadgeIndex >= 0) {
      api?.scrollTo(activeBadgeIndex)
    }
  }, [api, activeBadge, tweenScale])

  function updateIndex(direction: 'prev' | 'next') {
    const newActiveBadgeIndex =
      direction === 'next'
        ? Math.min(badges.length, activeBadgeIndex + 1)
        : Math.max(0, activeBadgeIndex - 1)
    handleClickBadge(badges[newActiveBadgeIndex]!)
  }

  return (
    <div className="flex max-w-full flex-col gap-3 rounded-3xl bg-elevation-1 p-4">
      <Carousel
        opts={{
          align: 'center',
          containScroll: 'keepSnaps',
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {badges.map((badge, index) => (
            <CarouselItem key={badge.id} className="basis-full sm:basis-1/3">
              <Badge
                {...badge}
                earned={hasEarned(badge.actions)}
                showRewardDetails={activeBadgeIndex === index}
                handleClick={handleClickBadge}
                className="cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() => updateIndex('prev')}
          className="-left-0 h-full bg-elevation-3 text-white"
        />
        <CarouselNext
          onClick={() => updateIndex('next')}
          className="-right-0 h-full bg-elevation-3 text-white"
        />
      </Carousel>
      {activeBadge?.actions ? (
        <ActionDetails actions={activeBadge?.actions} />
      ) : null}
    </div>
  )
}

export default Badges
