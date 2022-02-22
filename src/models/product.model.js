const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        gender: {type: String, required: true},
        price: {type: Number, required: true},
        discount: {type: String, required: true},
        colour: {type: String, required: true},
        brand: {type: String, required: true},
        tribe: {type: Number, required: true},
        product_description: {type: String, required: true},
        images: [{type: String}],
        offers: [{type: String}],
        ratings : {type: Number, required: true},
        popular : {type: String, required: false},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("product", productSchema);