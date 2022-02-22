const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

// Get route

router.get("", async(req, res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

// Get user by Id route

router.get("/:id", async(req, res)=>{
    try{
        const user = await User.find(req.params.id).lean().exec();
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async(req, res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async(req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async(req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
module.exports = router;