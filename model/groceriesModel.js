const mongoose=require('mongoose');
const groceriesSchema=mongoose.Schema({
    productCode:
    {
        type: Number,
        required: true
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
    imageSRC:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        requried: true
    },
    price:
    {
        type: Number,
        required: true
    }
});
module.exports=mongoose.model('Groceries',groceriesSchema);