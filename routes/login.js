const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');



const loginModel=require('../model/loginModel');

router.post('/register',function(req,res){
    const newRegister = new loginModel({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        address: "",
        password: req.body.password
    });
    newRegister.save();
    //res.sendFile('/home/venky/codingCodeAsylum/branchesEssential/covid19essentialpurchase/public/medical.html');
    res.redirect("/medicalPageLoad");
})

router.post('/successfull', function(req, res){
    const emailId = req.body.email;
    const pass = req.body.password;
    console.log(req.body.email);
    loginModel.find({email: emailId})
    .exec()
    .then(details=>{
        //if(details.length==0){
        //res.json(false).status(200);
    //}
    if(pass===details[0].password)
    {
        res.redirect("/medicalPageLoad");
    }
    else{
        res.json(false).status(200);
    }
})
})
router.get('/email/:email/password/:password', function(req,res){
    const emailId = req.params.email;
    const pass = req.params.password;
    loginModel.find({email: emailId})
    .exec()
    .then(details =>{
        if(details.length==0){
            res.json(false),status(200);
        }
        else if(pass===details[0].password)
        {
            res.redirect("/medicalPageLoad");
            res.json(true).status(200);
        }
        else{
            res.json(false).status(200);
        }
    })
})




module.exports=router;