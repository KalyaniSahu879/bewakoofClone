const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        full_name: { type: String, required: true },
        date_of_birth: { type: Date, required: true, trim: true, },
        gender: { type: String, required: true },
        mobile_number: { type: Number, required: true },
        role: [{
            type: String,
            default: 'user'
        }],
        address_id: { type: mongoose.Schema.Types.ObjectId, ref: "address", required: false },
        wallet_balance: { type: Number, required: false, default: 0 },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


userSchema.pre('save', function (next) {


    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next()
})

module.exports = mongoose.model("user", userSchema);