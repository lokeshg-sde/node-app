import React from 'react'
import { ThemeProvider, StyledEngineProvider as StylesProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'

import { GlobalContext } from '../context'
import { lightTheme } from '../assets/theme'
import { useGlobalConfig } from '../hooks/useGlobalConfig'

type Props = { children: JSX.Element | JSX.Element[] }

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

export default function ConfigController({ children }: Props): JSX.Element {
  const theme = lightTheme
  const context = useGlobalConfig()

  return (
    <GlobalContext.Provider value={context}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}> {children} </QueryClientProvider>{' '}
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </GlobalContext.Provider>
  )
}
