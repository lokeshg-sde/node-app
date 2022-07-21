import { createContext } from 'react'

import { INITIAL_STATE } from '../constants'
import type { GlobalContextType } from '../types'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = (): void => {}

export const GlobalContext = createContext<GlobalContextType>({
  ...INITIAL_STATE,
  enableOrDisableDarkMode: emptyFunction,
  enableOrDisableFixedNav: emptyFunction,
  enableOrDisableMiniSideNav: emptyFunction,
  enableOrDisableTransNav: emptyFunction,
  enableOrDisableTransSideNav: emptyFunction,
  enableOrDisableWhiteSideNav: emptyFunction,
  openOrCloseConfigurator: emptyFunction,
  setSideNavColor: emptyFunction,
})
