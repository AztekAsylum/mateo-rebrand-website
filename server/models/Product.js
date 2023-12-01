const mongoose = require("mongoose");

const { Schema } = mongoose;

const sizeSchema = new Schema({
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  price_id: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },

  sizes: [sizeSchema],

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
