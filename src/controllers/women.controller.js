const express = require("express");

const router = express.Router();
const { getcontroller, getcontrollerbyid } = require("./mencrudcontroller");

router.get("/boyfriend-tshirts", getcontroller);
router.get("/full-sleve-tshirt", getcontroller);
router.get("/halfsleeves-tshirt", getcontroller);
router.get("/sweatshirt-hoodies", getcontroller);
router.get("/jackets", getcontroller);
router.get("/joggers", getcontroller);
router.get("/pyjamas", getcontroller);
router.get("/denims", getcontroller);
router.get("/kurtas", getcontroller);
router.get("/vest", getcontroller);
router.get("/backpacks", getcontroller);
router.get("/shorts", getcontroller);

router.get("/3qshirts", getcontroller);

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
