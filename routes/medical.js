const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');

const medicalModel=require('../model/medicalModel');

router.post('/postDetails', function(req,res){
    const newProduct = new medicalModel({
        productCode: req.body.productCode,
        productName: req.body.productName,
        quantity: req.body.quantity,
        imageSRC: req.body.imageSRC,
        description: req.body.description,
        price: req.body.price
    });
    newProduct.save();
    res.json('product listed').status(201);
});

router.get('/productDetails', function(req,res){
    medicalModel.find()
    .exec()
    .then(products=>{
        res.json(products).status(200);
    })
})

router.get('/pcode/:pcode', function(req,res){
    const prodCode=req.params.pcode;
    sellerModel.find({productCode:prodCode})
    .exec()
    .then(prod=>{
        res.json(prod).status(200);
    })
})


module.exports=router;