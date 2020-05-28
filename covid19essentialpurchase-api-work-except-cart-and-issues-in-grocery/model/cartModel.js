const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
    productCode:{
        type:Number,
        required:true
    },
    productName:
    {
        type: String,
        required: true
    },
    quantity:
    {
        type: Number,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    }
});
module.exports=mongoose.model('Cart',cartSchema);