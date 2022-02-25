const Product = require("../models/product.model");
const accessories = require("../models/accessories.mode");

const getcontrollerbyid = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    const Men = await Product.findById(req.params.id).lean().exec();

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getmencontroller = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    let myString = req.path;

    if (myString.charAt(0) === "/");
    myString = req.path.slice(1);

    const Men = await Product.find({
      $and: [
        { categories: myString },
        { $or: [{ gender: "Male" }, { gender: "male" }] },
      ],
    })
      .lean()
      .exec();

    const menlength = await Product.find({
      categories: myString,
    }).countDocuments();

    return res.status(200).send({ Men, menlength });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
const getwomencontroller = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    let myString = req.path;

    if (myString.charAt(0) === "/");
    myString = req.path.slice(1);

    const Men = await Product.find({
      $and: [
        { categories: myString },
        { $or: [{ gender: "Female" }, { gender: "female" }] },
      ],
    })
      .lean()
      .exec();

    const menlength = await Product.find({
      categories: myString,
    }).countDocuments();

    return res.status(200).send({ Men, menlength });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getaccessoriescontroller = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    let myString = req.path;
    console.log(myString);

    if (myString.charAt(0) === "/");
    myString = req.path.slice(1);

    const Men = await accessories.find({ categories: myString }).lean().exec();

    const menlength = await accessories
      .find({
        categories: myString,
      })
      .countDocuments();

    return res.status(200).send({ Men, menlength });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  getmencontroller,
  getwomencontroller,
  getcontrollerbyid,
  getaccessoriescontroller,
};
