import type { MiddleWareCallBackFunction } from '../types'

function isUrlMatch(p: string | { url: string }, url: string): boolean {
  if (typeof p === 'string') {
    return p === url
  }

  if (typeof p === 'object' && p.url) {
    return isUrlMatch(p.url, url)
  }

  return false
}

function isMethodMatch(methods: string[] | undefined, method: string): boolean {
  if (!methods) {
    return true
  }

  return methods.includes(method)
}

export const authenticateUser = (paths: any[], middleware: MiddleWareCallBackFunction) => {
  if (paths) {
  }
}
