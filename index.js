const express=require('express');
const app=express();

//starting the server
app.listen(8000,function(){});

//making front end public
app.use(express.static(__dirname+'/public'));

//starting index.html from localhost
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})