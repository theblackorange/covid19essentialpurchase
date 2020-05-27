const mongoose=require('mongoose');
const groceriesSchema=mongoose.Schema({
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
    }
});
module.exports=mongoose.model('Groceries',groceriesSchema);