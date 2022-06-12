export type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH'

export type UrlPath = { url: string; methods?: Method[] }

export type Paths = UrlPath[]
