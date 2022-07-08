import React, { createContext, useContext } from "react"

export const initialState = {
  miniSidenav: false,
  transparentSidenav: false,
  whiteSidenav: false,
  sidenavColor: "info",
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  layout: "dashboard",
  darkMode: false,
}

export const defaultValue = [initialState, () => {}]

export const ThemeContext: React.Context<typeof initialState> = createContext(initialState)

// ThemeContext.displayName = "ThemeContext"

export function reducer(
  state: typeof initialState,
  action: { type: string; value: string | boolean }
) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value }
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value }
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value }
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value }
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value }
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value }
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value }
    }
    case "DIRECTION": {
      return { ...state, direction: action.value }
    }
    case "LAYOUT": {
      return { ...state, layout: action.value }
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useMaterialUIController() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    )
  }

  return context
}

const setMiniSidenav = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "MINI_SIDENAV", value })
const setTransparentSidenav = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "TRANSPARENT_SIDENAV", value })
const setWhiteSidenav = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "WHITE_SIDENAV", value })
const setSidenavColor = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "SIDENAV_COLOR", value })
const setTransparentNavbar = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value })
const setFixedNavbar = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "FIXED_NAVBAR", value })
const setOpenConfigurator = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value })
const setDirection = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "DIRECTION", value })
const setLayout = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "LAYOUT", value })
const setDarkMode = (dispatch: (arg0: { type: string; value: any }) => any, value: any) =>
  dispatch({ type: "DARKMODE", value })

export {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
}
