import morgan from 'morgan'

const allowedFiles = ['.js', '.svg', '.pdf', '.png', '.json']
const urlRegex = new RegExp(`([a-zA-Z0-9\\s_\\.\\-:])+(${allowedFiles.join('|')})$`)

export const logger = morgan((tokens, req, res) => {
  const info = {
    remote: tokens['remote-addr'](req, res),
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    contentLength: tokens.res(req, res, 'content-length'),
    responseTime: tokens['response-time'](req, res),
    time: tokens[':date[clf]'](req, res),
  }

  if (urlRegex.test(info.url as string)) {
    console.log(info)
  }

  return [
    tokens['remote-addr'](req, res),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ')
})
