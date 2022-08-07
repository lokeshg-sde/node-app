import { getApiConfig } from './getApiConfig'
import saveFile from './saveFile'

export default async function downLoadCV(): Promise<void> {
  const root = getApiConfig()

  try {
    const response = await fetch(`${root}/cv`)
    const blob = await response.blob()
    const file = new Blob([blob])

    saveFile(file, 'LokeshG.pdf')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (errs: any) {
    throw new Error(errs?.message || '')
  }
}
