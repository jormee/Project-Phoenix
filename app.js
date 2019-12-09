require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express()
app.use(cors());

const port = process.env.PORT || 3002;


app.get('/',(req,res)=>{
    res.status(200).send("")
})
app.post("/dashboard",(req,res)=>{

})

app.post("/create-content",(req,res)=>{

})
app.post("/signup",(req,res)=>{

})
app.post("login",(req,res)=>{

})

app.listen(port,()=>{
    console.log("App started on "+port)
})