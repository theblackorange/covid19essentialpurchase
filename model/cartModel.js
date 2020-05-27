const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
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