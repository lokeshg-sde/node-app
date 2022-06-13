import { Schema, model } from 'mongoose'

export const UserRoles = ['admin', 'user', 'guest']

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: String,
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: UserRoles,
        message: '{VALUE} is not supported'
      },
      default: 'guest'
    }
  },
  { timestamps: true }
)

// eslint-disable-next-line func-names
userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login
  })

  if (!user) {
    user = await this.findOne({ email: login })
  }

  return user
}

const User = model('User', userSchema)

export default User
