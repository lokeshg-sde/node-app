import { INITIAL_STATE, ACTION_TYPES } from '../constants'

export type GlobalConfigState = typeof INITIAL_STATE
export type Action = { type: ACTION_TYPES; payload: Partial<GlobalConfigState> }
export type GlobalContextType = GlobalConfigState & {
  enableOrDisableDarkMode: () => void
  enableOrDisableFixedNav: () => void
  enableOrDisableMiniSideNav: () => void
  enableOrDisableTransNav: () => void
  enableOrDisableTransSideNav: () => void
  enableOrDisableWhiteSideNav: () => void
  openOrCloseConfigurator: () => void
  setSideNavColor: (value: 'info' | 'error') => void
}
