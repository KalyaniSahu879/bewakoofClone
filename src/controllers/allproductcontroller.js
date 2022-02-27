const Product = require("../models/product.model");
const accessories = require("../models/accessories.mode");
const express = require("express");

const router = express.Router();
router.get("/:id", async (req, res) => {
  try {
    let product;

    product = await Product.findById(req.params.id).lean().exec();
    if (product) {
      return res.status(200).send(product);
    } else {
      product = await accessories.findById(req.params.id).lean().exec();
      return res.status(200).send(product);
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
