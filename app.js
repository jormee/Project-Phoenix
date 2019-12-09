require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express()
app.use(cors());

const port = process.env.PORT || 3002;




app.listen(port,()=>{
    console.log("App started on "+port)
})