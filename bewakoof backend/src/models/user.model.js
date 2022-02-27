const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    full_name: { type: String, required: false },
    date_of_birth: { type: Date, required: false, trim: true },
    gender: { type: String, required: false },
    mobile_number: { type: Number, required: false },
    role: {
      type: String,
      required: false,
      default: "user",
    },

    wallet_balance: { type: Number, required: false, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
