import type { ActionType } from '@/types'

export function hasEarned(actions?: ActionType[]) {
  if (!actions) return false
  return actions.every(action => action.completed)
}
