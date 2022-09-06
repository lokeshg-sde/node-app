export const FormValidationRegex = {
  email: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%,^&*-. ()<>:_,=+/])([a-zA-Z\d#?!@$%,^&*-. ()<>:_,=+/]{8,64})$/,
  // eslint-disable-next-line max-len
  url: /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
}

const allowedFiles = ['.js', '.svg', '.pdf', '.png', '.json']

export const LOGGER_URL_REGEX = new RegExp(`([a-zA-Z0-9\\s_\\.\\-:])+(${allowedFiles.join('|')})$`)
