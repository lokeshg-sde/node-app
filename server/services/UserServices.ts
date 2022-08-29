import bcrypt from 'bcryptjs'

import { User } from '../models'
import { generateAccessToken } from '../auth/jwt'

import type { UserRole } from '../types'

type Credentials = {
  username: string
  password: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function login({ username, password }: Credentials) {
  const user = await User.findOne({ username })

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateAccessToken({
        username,
        role: user.role as UserRole,
        id: user._id as unknown as string,
      })

      return { ...user.toJSON(), token }
    }

    return { message: 'Password Mismatch' }
  }
}

export async function register(params: unknown): Promise<void> {
  const user = new User(params)

  await user.save()

  console.log('User created Successfully')
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getById(id: string) {
  const user = await User.findById(id)

  console.log(`user id ${id}`)

  return user?.toJSON()
}
