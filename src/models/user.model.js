const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        full_name: {type: String, required: true},
        date_of_birth: {type: Date, required: true},
        gender: {type: String, required: true},
        mobile_number: {type: Number, required: true},
        role: [{type: String}],
        address_id: {type: mongoose.Schema.Types.ObjectId, ref: "address", required: true},
        wallet_balance: {type: Number, required: false, default: 0},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("user", userSchema);