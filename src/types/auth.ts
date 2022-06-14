import type { UserRole, UserRoles } from './UserModel'

export type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH'

export type UrlPath = { url: string; methods?: Method[]; userRoles?: UserRoles }

export type Paths = UrlPath[]

export type JwtTokePayload = {
  username: string
  id: number | string
  role: UserRole
}
