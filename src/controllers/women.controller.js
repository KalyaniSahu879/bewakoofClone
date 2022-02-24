const express = require("express");

const router = express.Router();
const {
  getcontrollerbyid,
  getwomencontroller,
} = require("./mencrudcontroller");

router.get("/boyfriend-tshirts", getwomencontroller);
router.get("/full-sleve-tshirt", getwomencontroller);
router.get("/3qshirts", getwomencontroller);
router.get("/sweatshirt-hoodies", getwomencontroller);
router.get("/jackets", getwomencontroller);
router.get("/denims", getwomencontroller);

router.get("/joggers", getwomencontroller);
router.get("/shorts", getwomencontroller);
router.get("/boxers", getwomencontroller);
router.get("/pyjamas", getwomencontroller);

router.get("/pants", getwomencontroller);

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

// router.patch("/:id", async (req, res) => {
//   try {
//     const women = await women.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     return res.status(200).send(women);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// // delete route

// router.delete("/:id", async (req, res) => {
//   try {
//     const women = await women.findByIdAndDelete(req.params.id);
//     return res.status(200).send(women);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });
module.exports = router;
