export function getApiConfig(): string {
  const API_ORIGIN = window.location.origin
  const ENV = process.env.NODE_ENV || 'development'
  const PROXY = process.env.DEV_SERVER_ADDRESS || 'http://localhost:5000'

  return ENV === 'development' ? PROXY : API_ORIGIN
}
