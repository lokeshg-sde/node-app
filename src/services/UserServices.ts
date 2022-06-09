import bcrypt from 'bcryptjs'

import { User } from '../models'
import { generateAccessToken } from '../helpers/jwt'

type Credentials = {
  username: string
  password: string
}

export async function login({ username, password }: Credentials) {
  const user = await User.findOne({ username })

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateAccessToken(username)

    return { ...user.toJSON(), token }
  }
}

export async function register(params: any) {
  const user = new User(params)
  await user.save()
}

export async function getById(id: string) {
  const user = await User.findById(id)
  return user.toJSON()
}
