const express= require('express');
const router=express.Router();
const mongoose=require('mongoose');

const cartModel=require('../model/cartModel');

router.post('/postdetails',function(req,res)
{
   const newcart=new cartModel(
       {
           productName:req.body.productName,
           quantity:req.body.quantity,
           price:req.body.price
       });
       newcart.save();
       res.json("Cart Updated").status(200);   1   
})

router.get('/cartdetails',function(req,res)
{
    cartModel.find()
    .exec()
    .then(cart=>{
        res.json(cart).status(200);
    })
    .catch(err=>{res.json(err).status(500);})
})
router.put('/pcode/:pcode',function(req,res)
{
    const id=req.params.pcode;
    const newquantity=req.body.quantity;
    cartModel.updateOne({pcode:id},{$set:{quantity:newquantity}})
    .exec()
    .then(cart=>{res.json(cart).status(200);})
    .catch(err=>{res.json(err).status(500);})
})

router.delete('/pcode/:pcode',function(req,res)
{
    const id=req.params.pcode;
    cartModel.deleteOne({pcode:id})
    .exec()
    .then(object=>{res.json(object).status(200);})
    .catch(err=>{res.json(err).status(500);})
})
module.exports=router;