const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    gender: { type: String, required: true },

    discount: { type: String, required: true },
    colour: { type: String, required: true },
    brand: { type: String, required: false },
    tribe: { type: Number, required: true },
    desc: { type: String, required: true },

    offers: [{ type: String }],
    ratings: { type: Number, required: true },
    popular: { type: String, required: false },
    categories: { type: String, required: false },
    sizes: [{ type: String }],
    product_type: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
