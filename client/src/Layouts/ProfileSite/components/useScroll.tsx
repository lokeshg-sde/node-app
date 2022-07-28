import { useMemo, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import type { AnimationControls } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useScroll = (thresh = 0.1) => {
  const controls: AnimationControls = useAnimation()
  const [element, view] = useInView({ threshold: thresh })
  const ref = useRef(element)
  const isVisible = useMemo(() => !!controls, [controls])

  if (view) {
    controls.start('show')
  } else {
    controls.start('hidden')
  }

  return [ref, isVisible]
}
