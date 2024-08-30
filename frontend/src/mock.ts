import type { BadgeType } from './types'

export const ACHIEVEMENT_BADGES = [
  {
    title: 'Visionary Badge',
    id: 1,
    img_url: '/badge_1.svg',
    actions: [
      {
        description:
          'Provide liquidity to a new trading pair within the first week of launch.',
        completed: true,
        points: 200,
      },
      {
        description: 'Hold a minimum of $500 in your wallet for 1 month.',
        completed: true,
        points: 100,
      },
      {
        description:
          'Participate in a community vote on a new feature or trading pair.',
        completed: true,
        points: 150,
      },
    ],
    reward: '1.5x',
    reward_details: 'Forward-thinking actions rewarded.',
  },
  {
    title: 'Liquidity Machine',
    id: 2,
    img_url: '/badge_2.svg',
    actions: [
      {
        description: 'Provide at least $50 liquidity to USDT/ETH.',
        completed: false,
        points: 100,
      },
      {
        description: 'Provide at least $50 liquidity to LINK/ETH.',
        completed: true,
        points: 100,
      },
      {
        description: 'Provide at least $100 liquidity to WBTC/ETH.',
        completed: false,
        points: 200,
      },
    ],
    reward: '2,000 Points',
    reward_details: 'Liquidity Provision to ETH/USDC',
  },
  {
    title: 'Pioneer Badge',
    id: 4,
    img_url: '/badge_4.svg',
    actions: [
      {
        description: 'Provide liquidity to 5 different trading pairs.',
        completed: false,
        points: 200,
      },
      {
        description: 'Complete trades on 3 different blockchains.',
        completed: false,
        points: 150,
      },
      {
        description: 'Refer 5 friends to join the platform.',
        completed: false,
        points: 150,
      },
    ],
    reward: '2x',
    reward_details: 'Double your points for pioneering.',
  },
  {
    title: 'Rookie Badge',
    id: 7,
    img_url: '/badge_7.svg',
    actions: [
      {
        description: 'Complete your first trade on the platform.',
        completed: false,
        points: 100,
      },
      {
        description: 'Provide liquidity to a stablecoin pair.',
        completed: false,
        points: 100,
      },
      {
        description: 'Join the platform’s Discord or Telegram group.',
        completed: false,
        points: 50,
      },
    ],
    reward: '1.5x',
    reward_details: 'Boost for new users.',
  },
  {
    title: 'Income Engineer',
    id: 8,
    img_url: '/badge_8.svg',
    actions: [
      {
        description: 'Earn $1,000 in trading fees over a month.',
        completed: false,
        points: 200,
      },
      {
        description: "Automate a trading strategy using the platform's tools.",
        completed: false,
        points: 150,
      },
      {
        description: 'Reinvest trading profits back into the platform.',
        completed: false,
        points: 150,
      },
    ],
    reward: '3,000 Points',
    reward_details: 'Reward for sustainable strategies.',
  },
] as const satisfies BadgeType[]

export const COMMUNITY_BADGES = [
  {
    title: 'Pathfinder OG',
    id: 3,
    img_url: '/badge_3.svg',
    actions: [
      {
        description: 'Join the platform within the first month of its launch.',
        completed: false,
        points: 150,
      },
      {
        description: 'Complete 10 trades in the first 30 days.',
        completed: false,
        points: 200,
      },
      {
        description: 'Provide feedback on the beta version of a new feature.',
        completed: false,
        points: 100,
      },
    ],
    reward: '2,500 Points',
    reward_details: 'Early adopter reward.',
  },
  {
    title: 'Core OG',
    id: 5,
    img_url: '/badge_5.svg',
    actions: [
      {
        description: 'Participate in a core governance proposal vote.',
        completed: false,
        points: 100,
      },
      {
        description: 'Provide feedback on the roadmap during a community AMA.',
        completed: false,
        points: 100,
      },
      {
        description:
          'Hold a minimum of $1,000 in the platform’s native token for 6 months.',
        completed: false,
        points: 200,
      },
    ],
    reward: '2,000 Points',
    reward_details: 'Governance and contribution reward.',
  },
  {
    title: 'Beacon Badge',
    id: 6,
    img_url: '/badge_6.svg',
    actions: [
      {
        description: 'Share your trading strategy in the community forum.',
        completed: false,
        points: 150,
      },
      {
        description: 'Achieve a 10% profit margin on a single trade.',
        completed: false,
        points: 200,
      },
      {
        description:
          'Help a new user complete their first trade by offering guidance.',
        completed: false,
        points: 100,
      },
    ],
    reward: '2,500 Points',
    reward_details: 'Leadership in the community.',
  },
  {
    title: 'Liquidity OG',
    id: 9,
    img_url: '/badge_9.svg',
    actions: [
      {
        description: 'Provide liquidity to 3 different pools for 6 months.',
        completed: false,
        points: 150,
      },
      {
        description: 'Earn at least $500 in liquidity rewards.',
        completed: false,
        points: 200,
      },
      {
        description: 'Participate in a liquidity mining event.',
        completed: false,
        points: 150,
      },
    ],
    reward: '2x',
    reward_details: 'Double points for long-term liquidity.',
  },
] as const satisfies BadgeType[]
