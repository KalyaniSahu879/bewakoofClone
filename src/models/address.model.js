const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },

    full_name: { type: String, required: true },
    mobilenumber: { type: Number, required: true },
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    flatno: { type: String, required: true },
    address_line2: { type: String, required: false },
    address_line3: { type: String, required: false },
    address_type: { type: String, required: false, default: "OTHER" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("address", addressSchema);
