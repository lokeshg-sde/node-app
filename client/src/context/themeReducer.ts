import { ACTION_TYPES } from '../constants'
import type { GlobalConfigState, Action } from '../types'

export function MaterialUIThemeReducer(
  state: GlobalConfigState,
  action: Action
): GlobalConfigState {
  switch (action.type) {
    case ACTION_TYPES.MINI_SIDENAV: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.TRANSPARENT_SIDENAV: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.WHITE_SIDENAV: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.SIDENAV_COLOR: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.TRANSPARENT_NAVBAR: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.FIXED_NAVBAR: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.OPEN_CONFIGURATOR: {
      return { ...state, ...action.payload }
    }
    case ACTION_TYPES.DARK_MODE: {
      return { ...state, ...action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
