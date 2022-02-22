const express = require("express");

const router = express.Router();
const Product = require("../models/product.model");

// post request for men  product categories

router.post("/printedt-shirt", async (req, res) => {
  try {
  } catch (e) {
    return res.send(e.message);
  }
});

// Get route

router.get("/printed-tshirt", async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    console.log(Product);
    const Men = await Product.find({ categories: "printed-tshirt" })
      .lean()
      .exec();
    const menlength = await Product.find({
      categories: "printed-tshirt",
    }).countDocuments();
    console.log(Men);

    return res.status(200).send({ Men, menlength });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/fullsleves-tshirt", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "fullsleves-tshirt" })
      .lean()
      .exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/halfsleeves-tshirt", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "halfsleeves-tshirt" })
      .lean()
      .exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/halfsleeves-tshirt", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "halfsleeves-tshirt" })
      .lean()
      .exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/jackets", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "jackets" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/jockets", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "jockets" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/denims", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "denims" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("vest", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "vest" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/kurtas", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "kurtas" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/shirts", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "shirts" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/shorts", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "shorts" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
router.get("/backpacks", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    const Men = await Product.find({ categories: "backpacks" }).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// get by id router starts for all categories

router.get("/printed-tshirt/:id", async (req, res) => {
  try {
    // the name of the categorie should be exactly same
    console.log(req.params.id);
    const Men = await Product.findById(req.params.id).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Get men by Id route

router.get("/:id", async (req, res) => {
  try {
    const Men = await Product.find(req.params.id).lean().exec();
    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// post route

// patch route

router.patch("/:id", async (req, res) => {
  try {
    const Men = await men.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// delete route

router.delete("/:id", async (req, res) => {
  try {
    const Men = await men.findByIdAndDelete(req.params.id);
    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
