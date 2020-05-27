const mongoose=require('mongoose');
const loginSchema=mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique:true
    },
    phoneNumber:
    {
        type: Number,
        required: true,
        unique:true
    },
    city:
    {
        type: String,
    },
    address:
    {
        type: String,
    },
    password:
    {
        type: String,
        required: true
    }
});
module.exports=mongoose.model('Login',loginSchema);