const express = require("express");
const { append } = require("vary");
const accessories = require("../models/accessories.mode");
const router = express.Router();
const {
  getaccessoriescontroller,
  getcontrollerbyid,
} = require("./mencrudcontroller");

const Product = require("../models/product.model");

// post request for men  product categories

// router.post("/printed-tshirt", async (req, res) => {
//   try {
//     console.log(req.path);
//     let myString = req.path;
//     if (myString.charAt(0) === "/");
//     myString = req.path.slice(1);
//     console.log(myString);

//     return res.send("x");
//   } catch (e) {
//     return res.send(e.message);
//   }
// });

// Get route
// router.get("", menhomepage);
router.get("/mobilecover", getaccessoriescontroller);
router.get("/premiumglasscover", getaccessoriescontroller);
router.get("/bags", getaccessoriescontroller);
router.get("/sliders", getaccessoriescontroller);
router.get("/calender-planners", getaccessoriescontroller);
router.get("/notebooks", getaccessoriescontroller);
router.get("/mugs", getaccessoriescontroller);

router.get("/flip-flops", getaccessoriescontroller);
router.get("/headphone-smartwatch", getaccessoriescontroller);
router.get("/caps", getaccessoriescontroller);
router.get("/socks", getaccessoriescontroller);

router.get("/printed-tshirt/:id", getcontrollerbyid);
router.get("/halfsleeves-tshirt/:id", getcontrollerbyid);
router.get("/fullsleves-tshirt/:id", getcontrollerbyid);
router.get("/jackets/:id", getcontrollerbyid);
router.get("/jockets/:id", getcontrollerbyid);
router.get("/denims/:id", getcontrollerbyid);
router.get("/vest/:id", getcontrollerbyid);
router.get("/kurtas/:id", getcontrollerbyid);
router.get("/shirts/:id", getcontrollerbyid);
router.get("/backpacks/:id", getcontrollerbyid);
router.get("/shorts/:id", getcontrollerbyid);
router.get("/sweatshirt-hoodies/:id", getcontrollerbyid);

router.post("", async (req, res) => {
  try {
    const Accessories = await accessories.create(req.body);
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Accessories = await accessories
      .find({ _id: req.params.id })
      .lean()
      .exec();
    return res.status(200).send(Accessories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.get("/fullsleves-tshirt", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "fullsleves-tshirt" })
//       .lean()
//       .exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/halfsleeves-tshirt", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "halfsleeves-tshirt" })
//       .lean()
//       .exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/halfsleeves-tshirt", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "halfsleeves-tshirt" })
//       .lean()
//       .exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/jackets", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "jackets" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/jockets", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "jockets" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/denims", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "denims" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("vest", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "vest" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/kurtas", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "kurtas" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/shirts", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "shirts" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
// router.get("/shorts", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "shorts" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.get("/backpacks", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same
//     const Men = await Product.find({ categories: "backpacks" }).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// get by id router starts for all categories

// router.get("/printed-tshirt/:id", async (req, res) => {
//   try {
//     // the name of the categorie should be exactly same

//     const Men = await Product.findById(req.params.id).lean().exec();

//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// // Get men by Id route

// router.get("/:id", async (req, res) => {
//   try {
//     const Men = await Product.find(req.params.id).lean().exec();
//     return res.status(200).send(Men);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

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
