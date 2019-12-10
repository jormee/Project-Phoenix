require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

//connect to atlas db
mongoose
  .connect(`${process.env.DB_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("db connection successful");
  })
  .catch(err => {
    console.log(err);
  });
//  mongoose.set("useCreateIndex", true);
//  mongoose.set({ useUnifiedTopology: true });

//set up app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//student schema
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

//teachers schema
const teacherSchema = new mongoose.Schema({
  fullname: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date_registered: {
    type: Date,
    default: new Date()
  }
});

const Student = new mongoose.model("Student", studentSchema);
const Teacher = new mongoose.model("Teacher", teacherSchema);

const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.status(200).send("");
});
app.post("/dashboard", (req, res) => {});

app.post("/create-content", (req, res) => {});
app.post("/signup", (req, res) => {
    const{fullname,username,subject}= req.body;
    bcrypt.hash(req.body.password,10,(err,hash)=>{
      if(err){
       return res.status(404).json({
          err: err
        })
      }else{
        const teacher = new Teacher({
          fullname:fullname,
          userrname:username,
          subject:subject,
          password:hash
      })

      teacher.save((err)=>{
        if(err){
          return res.status(400).json({
            status:"failed",
            message:"user counld no be save ",
            err:err
          })
        }else{
         return res.status(201).json({
            status:"success",
            username:req.body.username,
            fullname: req.body.fullname,
            subject:req.body.subject
          })
        }
      })

      }
    })
});
app.post("/login", (req, res) => {
  const {username,password} = req.body

  teacher.find({username:username},(err,foundteacher)=>{
    if(err){
      return res.status(404).json({
        status:"failed",
        message:"could not find user",
        err:err
      })
    }else{
      if(foundteacher){
        if(foundteacher.password===password){
          return res.status(200).json({
            fullname:foundteacher.fullname,
            subject:foundteacher.subject,
            username:foundteacher.username
          })
        }else{
          return res.status(401).json({
            status:"failed",
            message:"incorrect password"
          })
        }
      }
    }
  })
});

app.listen(port, () => {
  console.log("App started on " + port);
});
