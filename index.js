const express=require('express');
const app=express();

//starting the server
app.listen(8000,function(){});

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(cors());
//making front end public
app.use(express.static(__dirname+'/public'));

//starting index.html from localhost
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.get("/medicalPageLoad", (req, res)=>{
    res.sendFile(__dirname+'/public/medical.html');
})

//mongoDB connection
const mongoose=require('mongoose');
const uri='mongodb+srv://essential:essential@cluster0-jkthk.mongodb.net/test?retryWrites=true&w=majority'
const connectDB=mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true });

const seller = require('./routes/seller');
app.use('/seller',seller);

const login = require('./routes/login');
app.use('/login',login);

const medical = require('./routes/medical');
app.use('/medical',medical);

const groceries = require('./routes/groceries');
app.use('/grocery',groceries);