const express = require("express");
const women = require("../models/women.model");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
    try {
        const Women = await women.find().lean().exec();
        return res.status(200).send(Women)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get women by Id route

router.get("/:id", async (req, res) => {
    try {
        const Women = await women.find(req.params.id).lean().exec();
        return res.status(200).send(Women)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {
        const Women = await women.create(req.body);
        return res.status(200).send(Women)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const Women = await women.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(Women)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const Women = await women.findByIdAndDelete(req.params.id);
        return res.status(200).send(Women)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;