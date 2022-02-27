const express = require("express");
const accessories = require("../models/accessories.mode");
const router = express.Router();

// Get route

router.get("", async (req, res) => {
  try {
    const Accessories = await accessories.find().lean().exec();
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Get accessories by Id route

router.get("/:id", async (req, res) => {
  try {
    const Accessories = await accessories.find(req.params.id).lean().exec();
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// post route

router.post("", async (req, res) => {
  try {
    const Accessories = await accessories.create(req.body);
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// patch route

router.patch("/:id", async (req, res) => {
  try {
    const Accessories = await accessories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// delete route

router.delete("/:id", async (req, res) => {
  try {
    const Accessories = await accessories.findByIdAndDelete(req.params.id);
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
