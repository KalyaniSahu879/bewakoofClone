const express = require("express");
const men = require("../models/men.model");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
    try {
        const Men = await men.find().lean().exec();
        return res.status(200).send(Men)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get men by Id route

router.get("/:id", async (req, res) => {
    try {
        const Men = await men.find(req.params.id).lean().exec();
        return res.status(200).send(Men)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {
        const Men = await men.create(req.body);
        return res.status(200).send(Men)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const Men = await men.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(Men)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const Men = await men.findByIdAndDelete(req.params.id);
        return res.status(200).send(Men)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports = router;