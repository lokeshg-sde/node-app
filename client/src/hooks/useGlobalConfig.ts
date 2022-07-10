import { useReducer } from "react"
import type { Reducer } from "react"

import { INITIAL_STATE, ACTION_TYPES } from "../constants"
import { MaterialUIThemeReducer } from "../context"
import type { GlobalConfigState, Action } from "../types"

export function useGlobalConfig() {
  const [state, dispatch] = useReducer<Reducer<GlobalConfigState, Action>>(
    MaterialUIThemeReducer,
    INITIAL_STATE
  )

  const enableOrDisableDarkMode = () =>
    dispatch({ type: ACTION_TYPES.DARK_MODE, payload: { darkMode: !state.darkMode } })
  const enableOrDisableMiniSideNav = () =>
    dispatch({ type: ACTION_TYPES.MINI_SIDENAV, payload: { miniSidenav: !state.miniSidenav } })
  const enableOrDisableTransSideNav = () =>
    dispatch({
      type: ACTION_TYPES.TRANSPARENT_SIDENAV,
      payload: { transparentSidenav: !state.transparentSidenav },
    })
  const enableOrDisableWhiteSideNav = () =>
    dispatch({ type: ACTION_TYPES.WHITE_SIDENAV, payload: { whiteSidenav: !state.whiteSidenav } })
  const enableOrDisableFixedNav = () =>
    dispatch({ type: ACTION_TYPES.FIXED_NAVBAR, payload: { fixedNavbar: !state.fixedNavbar } })
  const enableOrDisableTransNav = () =>
    dispatch({
      type: ACTION_TYPES.TRANSPARENT_NAVBAR,
      payload: { transparentNavbar: !state.transparentNavbar },
    })
  const setSideNavColor = (value: "info" | "error") =>
    dispatch({
      type: ACTION_TYPES.SIDENAV_COLOR,
      payload: { sidenavColor: value || "info" },
    })
  const openOrCloseConfigurator = () =>
    dispatch({
      type: ACTION_TYPES.OPEN_CONFIGURATOR,
      payload: { openConfigurator: !state.openConfigurator },
    })

  return {
    ...state,
    enableOrDisableDarkMode,
    enableOrDisableFixedNav,
    enableOrDisableMiniSideNav,
    enableOrDisableTransNav,
    enableOrDisableTransSideNav,
    enableOrDisableWhiteSideNav,
    openOrCloseConfigurator,
    setSideNavColor,
  }
}
