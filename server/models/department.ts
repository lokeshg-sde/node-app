import { Schema, model } from 'mongoose'

const DepartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const Department = model('department', DepartmentSchema)

export default Department
