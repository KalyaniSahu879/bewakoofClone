const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
    {
        type: {type: String, required: true},
        cardholder_name: {type: String, required: true},
        expiry: {type: Date, required: true},
        card_number: {type: Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("card", cardSchema);