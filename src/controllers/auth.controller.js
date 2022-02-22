const express = require("express");
const { body, validationResult } = require('express-validator');

const User = require("../models/user.model");
const router = express.Router();








// post route regeisterd route

router.post("", body("email").isEmail(), body("mobile_number").isLength({ min: 10, max: 10 }), async (req, res) => {
    try {
        let user;
        // check any validations error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        console.log("user")
        user = await User.findOne({ $or: [{ email: req.body.email }, { mobile_number: req.body.mobile_number }] });

        //    check  if user is already exists or not
        if (user) {
            return res.send({ message: "Try another email or mobile number " })
        }
        console.log(user)
        //    else  user not exists create a user 
        if (!user) {

            user = await User.create(req.body)
            console.log(user)
            return res.status(200).send(user)
        }

        // const user = await User.create(req.body);

    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})











module.exports = router;