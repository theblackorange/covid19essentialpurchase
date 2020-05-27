const mongoose=require('mongoose');
const sellerSchema=mongoose.Schema({
    agentName:
    {
        type: String,
        required: true
    },
    phoneNumber:
    {
        type: Number,
        required: true
    },
    city:
    {
        type: String,
        required: true
    }
});
module.exports=mongoose.model('Seller',sellerSchema);