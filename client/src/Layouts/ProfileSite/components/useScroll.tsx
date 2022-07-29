import { useMemo, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import type { AnimationControls } from 'framer-motion'

type Ref = React.MutableRefObject<(node?: HTMLElement | null | undefined) => void>
export const useScroll = (thresh = 0.1): [Ref, boolean] => {
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
