import React, { useMemo, useReducer } from "react"
import { ThemeProvider, StyledEngineProvider as StylesProvider } from "@mui/material/styles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { QueryClientProvider, QueryClient } from "react-query"
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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        retry: true,
        // eslint-disable-next-line no-magic-numbers
        staleTime: 5 * 60000,
      },
    },
  })

  const dispatch = useMemo(() => {
    // @ts-expect-error
    return (action: Action) => dispatcher(action)
  }, [dispatcher])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setMiniSideNav = (value: boolean) => dispatch({ type: "MINI_SIDENAV", value })

  return (
    <ThemeContext.Provider value={context}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>{" "}
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  )
}
