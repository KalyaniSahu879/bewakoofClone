const Product = require("../models/product.model");

const getcontrollerbyid = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    const Men = await Product.findById(req.params.id).lean().exec();
    console.log(Men);

    return res.status(200).send(Men);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getcontroller = async (req, res) => {
  try {
    // the name of the categorie should be exactly same

    console.log("yes");
    let myString = req.path;

    if (myString.charAt(0) === "/");
    myString = req.path.slice(1);

    const Men = await Product.find({ categories: myString }).lean().exec();
    console.log(Men);
    const menlength = await Product.find({
      categories: myString,
    }).countDocuments();

    return res.status(200).send({ Men, menlength });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { getcontroller, getcontrollerbyid };
