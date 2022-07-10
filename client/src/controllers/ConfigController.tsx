import React, { useMemo, useReducer } from "react"
import { ThemeProvider, StylesProvider } from "@material-ui/styles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import type { Reducer } from "react"

import { ThemeContext, initialState, reducer } from "../context/theme"
import { lightTheme } from "../assets/theme"

type State = typeof initialState
type Action = { type: string; value: string | boolean }
type Props = { children: JSX.Element | JSX.Element[] }

export default function ConfigController({ children }: Props) {
  const theme = lightTheme
  const [context, dispatcher] = useReducer<Reducer<State, Action>>(
    // @ts-expect-error
    reducer,
    initialState
  )

  const dispatch = useMemo(() => {
    // @ts-expect-error
    return (action: Action) => dispatcher(action)
  }, [dispatcher])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setMiniSideNav = (value: boolean) => dispatch({ type: "MINI_SIDENAV", value })

  return (
    <ThemeContext.Provider value={context}>
      {/* @ts-expect-error */}
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}> {children} </StyledThemeProvider>{" "}
        </ThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  )
}
