const express = require("express");
const router = express.Router();
router.get("", async(req, res)=>{
    try{

    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.get("/:id", async(req, res)=>{
    try{

    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.post("", async(req, res)=>{
    try{

    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.patch("/:id", async(req, res)=>{
    try{

    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.delete("/:id", async(req, res)=>{
    try{

    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
module.exports = router;