const express = require("express");
const product = require("../models/product.model");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
    try {
        const Product = await product.find().lean().exec();
        return res.status(200).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get product by Id route

router.get("/:id", async (req, res) => {
    try {
        const Product = await product.find(req.params.id).lean().exec();
        return res.status(200).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {
        const Product = await product.create(req.body);
        return res.status(200).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const Product = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const Product = await product.findByIdAndDelete(req.params.id);
        return res.status(200).send(Product)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;