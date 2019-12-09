require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//connect to atlas db
mongoose
  .connect(`${process.env.DB_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("db connection successfu");
  })
  .catch(err => {
    console.log(err);
  });
mongoose.set("useCreateIndex", true);
mongoose.set({ useUnifiedTopology: true });

//set up app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//owners schema
const studentSchema = new mongoose.Schema({
  studentfullname: {
    type: String
  },
  studentClass: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },

  pix: {
    type: String
  },

  password: {
    type: String,
    required: true
  },
  date_registered: {
    type: Date,
    default: new Date()
  }
});

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.status(200).send("");
});
app.post("/dashboard", (req, res) => {});

app.post("/create-content", (req, res) => {});
app.post("/signup", (req, res) => {});
app.post("login", (req, res) => {});

app.listen(port, () => {
  console.log("App started on " + port);
});
