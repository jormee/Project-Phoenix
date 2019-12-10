const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();

// app.use(cors);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log('app is running on port 3000'));