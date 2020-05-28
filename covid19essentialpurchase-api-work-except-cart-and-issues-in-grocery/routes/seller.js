const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');

const sellerModel=require('../model/sellerModel');

router.post('/postDetails', function(req,res){
    const newSeller = new sellerModel({
        agentName: req.body.agentName,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city
    });
    newSeller.save();
    res.json('seller listed').status(201);
});

router.get('/sellerDetails', function(req,res){
    sellerModel.find()
    .exec()
    .then(seller=>{
        res.json(seller).status(200);
    })
})

router.get('/city/:city', function(req,res){
    const cityName=req.params.city;
    sellerModel.find({city:cityName})
    .exec()
    .then(seller=>{
        res.json(seller).status(200);
    })
})

module.exports=router;