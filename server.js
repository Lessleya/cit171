
const express = import('express');

const app = express.application;

app.listen(3000,()=> {console.log("Listening...")});

app.get('/',(req,res)=>{res.send("Hello")});


