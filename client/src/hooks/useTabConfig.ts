import { useEffect } from 'react'

type Config = {
  title: string
  logo: string
}

export function usePageConfig({ title, logo }: Config): void {
  useEffect(() => {
    const favicon = document.getElementById('logo')

    if (title) {
      document.title = title
    }
    if (logo && favicon) {
      favicon.setAttribute('href', logo)
    }
  }, [logo, title])
}
