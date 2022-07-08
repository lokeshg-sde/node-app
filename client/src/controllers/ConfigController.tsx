import React, { useMemo, useReducer } from "react"
import type { Reducer } from "react"

import { ThemeContext, initialState, reducer } from "../context/theme"

type State = typeof initialState
type Action = { type: string; value: string | boolean }
type Props = { children: JSX.Element | JSX.Element[] }

export default function ConfigController({ children }: Props) {
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
  const setMiniSidenav = (value: boolean) => dispatch({ type: "MINI_SIDENAV", value })

  return <ThemeContext.Provider value={context}> {children}</ThemeContext.Provider>
}
