import { model, Schema } from 'mongoose'

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
        values: ['admin', 'user', 'guest'],
        message: '{VALUE} is not supported'
      },
      default: 'guest'
    }
  },
  { timestamps: true }
)

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
