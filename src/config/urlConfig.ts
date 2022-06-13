import type { UrlPath } from '../types'

export const URL_CONFIG: UrlPath[] = [{ url: '/users/:id', userRoles: ['admin', 'super-user'] }]
export const URL_EXCLUDED = ['/users/register', '/users/login']
