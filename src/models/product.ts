import { Schema, model } from 'mongoose'

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: String,
    name: {
      type: String,
    },
    category: String,
  },
  { timestamps: true }
)

const Product = model('product', ProductSchema)

export default Product
