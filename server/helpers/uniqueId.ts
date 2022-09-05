const dateStringSize = 36
const numberSize = 26
const mask = 'xxxx-xxxx-xxxx-xxxx'

/**
 *
 * @returns unique id as string based on the current time stamp
 */
export const generateUniqueId = (): string =>
  new Date().getTime().toString(dateStringSize) + Math.random().toString(numberSize).slice(2)

/**
 *
 * @returns unique key as string size of 16 digits
 */
export const getId = (): string =>
  mask.replace(/[x]/gi, () => Math.random().toString(numberSize)[5])
