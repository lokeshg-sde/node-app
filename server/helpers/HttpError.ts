class HttpError extends Error {
  status: number

  data: unknown

  constructor(status: number, message: string, data: unknown) {
    super(message)
    this.status = status
    this.message = message
    this.data = data
  }
}

export default HttpError
