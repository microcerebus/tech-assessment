export type ActionType = {
  description: string
  completed: boolean
  points: number
}

export type BadgeType = {
  title: string
  id: number
  img_url: `/badge_${number}.svg`
  actions?: ActionType[]
  reward: string
  reward_details: string
}

export enum ActivityType {
  Mint = 'Mint',
  Burn = 'Burn',
  Swap = 'Swap',
}

export type LatestActitivitiesTableData = {
  activity: ActivityType
  amount: string
  timestamp: string
  txId: string
}
