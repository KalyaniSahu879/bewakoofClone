const express = require("express");
const address = require("../models/address.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Get route

router.get("", async (req, res) => {
  try {
    const Address = await address.find().lean().exec();
    return res.status(200).send(Address);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Get address by Id route

router.get("/:id", async (req, res) => {
  try {
    const Address = await address.find({ _id: req.params.id }).lean().exec();
    return res.status(200).send(Address);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// post route

// router.post(
//   "",
//   // body("full_name").notEmpty().withMessage("Full name should not be empty!"),
//   // body("city").notEmpty().withMessage("City should not be empty!"),
//   // body("state").notEmpty().withMessage("State should not be empty!"),
//   // body("flatno").notEmpty().withMessage("flatno should not be empty!"),

//   // body("pincode")
//   //   .isLength({ min: 6, max: 6 })
//   //   .withMessage("Pincode should be six digits"),
//   // body("mobilenumber")
//   //   .isLength({ min: 10, max: 11 })
//   //   .withMessage(" Mobile Number should be ten digits"),

//   async (req, res) => {
//     try {
//       console.log(req.body);
//       const errors = validationResult(req);
//       // errors = []
//       console.log(errors);

//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const Address = await address.create(req.body);

//       return res.status(200).send(Address);
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   }
// );

// patch route

router.post("", async (req, res) => {
  try {
    console.log(req);
    const Address = await address.create(req.body);
    return res.status(200).send(Address);
  } catch (e) {
    return res.send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const Address = await address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(Address);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// delete route

router.delete("/:id", async (req, res) => {
  try {
    const Address = await address.findByIdAndDelete(req.params.id);
    return res.status(200).send(Address);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});
module.exports = router;
