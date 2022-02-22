const express = require("express");
const card = require("../models/card.model");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
    try {
        const Card = await card.find().lean().exec();
        return res.status(200).send(Card)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get card by Id route

router.get("/:id", async (req, res) => {
    try {
        const Card = await card.find(req.params.id).lean().exec();
        return res.status(200).send(Card)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {
        const Card = await card.create(req.body);
        return res.status(200).send(Card)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const Card = await card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(Card)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const Card = await card.findByIdAndDelete(req.params.id);
        return res.status(200).send(Card)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;