export enum ACTION_TYPES {
  MINI_SIDENAV = "MINI_SIDENAV",
  TRANSPARENT_SIDENAV = "TRANSPARENT_SIDENAV",
  WHITE_SIDENAV = "WHITE_SIDENAV",
  SIDENAV_COLOR = "SIDENAV_COLOR",
  TRANSPARENT_NAVBAR = "TRANSPARENT_NAVBAR",
  FIXED_NAVBAR = "FIXED_NAVBAR",
  OPEN_CONFIGURATOR = "OPEN_CONFIGURATOR",
  DARK_MODE = "DARK_MODE",
}

export const INITIAL_STATE = {
  miniSidenav: false,
  transparentSidenav: false,
  whiteSidenav: false,
  sidenavColor: "info" as "info" | "error",
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  darkMode: false,
}
