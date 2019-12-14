require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const uuid = require("uuid");
const md5= require('md5')

const app = express();

//connect to atlas db
mongoose
  .connect(`mongodb+srv://chinedu:chinedu@pheonix-n9ifq.mongodb.net/test?retryWrites=true&w=majority`, {
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

//note schema
const noteSchema = new mongoose.Schema({
  teacherUsername: {
    type: String
  },
  note: {
    type: String
  },

  noteId: {
    type: String,
    required: true,
    unique: true
  },
  date_created: {
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

const Note = new mongoose.model("Note", noteSchema);
const Teacher = new mongoose.model("Teacher", teacherSchema);

const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.status(200).send("");
});
app.post("/dashboard", (req, res) => {});

app.get("/create-content", (req, res) => {
  let content = req.body.content;
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${content}&key=${process.env.GOOGLE_BOOK_KEY}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    )
    .then(res2 => {
      return res.status(200).json({
        data: res2
      });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/create-content", (req, res) => {
  const { note, teacherUsername } = req.body,
    newNote = new Note({
      note: note,
      teacherUsername: teacherUsername,
      noteId: uuid()
    });
  newNote.save(err => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        message: "could not save note"
      });
    } else {
      return res.status(201).json({
        status: "success",
        message: "Note created"
      });
    }
  });
});

app.post("/signup", (req, res) => {
<<<<<<< HEAD
  const { fullname, username, subject } = req.body;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(404).json({
        err: err
      });
    } else {
      const newTeacher = new Teacher({
        fullname: fullname,
        userrname: username,
        subject: subject,
        password: hash
      });
      newTeacher.save(err => {
        if (err) {
=======
    const{fullname,username,subject,password}= req.body;
    //bcrypt.hash(req.body.password,10,(err,hash)=>{
      // if(err){
      //  return res.status(404).json({
      //     err: err
      //   })
      // }else{
        const newTeacher = new Teacher({
          fullname:fullname,
          userrname:username,
          subject:subject,
          password:md5(password)
      })
      newTeacher.save((err)=>{
        if(err){
>>>>>>> 5b3136d37f1b019c9762a4aa18cdb0c3f825f14e
          return res.status(400).json({
            status: "failed",
            message: "user counld no be save ",
            err: err
          });
        } else {
          return res.status(201).json({
            status: "success",
            username: req.body.username,
            fullname: req.body.fullname,
            subject: req.body.subject
          });
        }
<<<<<<< HEAD
      });
    }
  });
=======
      })

      //}
    //})
>>>>>>> 5b3136d37f1b019c9762a4aa18cdb0c3f825f14e
});

//login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  Teacher.findOne({ username: username }, (err, foundteacher) => {
    if (err) {
      return res.status(404).json({
<<<<<<< HEAD
        status: "failed",
        message: "could not find user",
        err: err
      });
    } else {
      if (foundteacher) {
        bcrypt.compare(password, foundteacher.password, function(err, res2) {
          if (res2 === true) {
            Note.find({ teacherUsername: username }, (err, notes) => {
              if (err) {
                return res.status(404).json({
                  message: "Sorry an error occurred while getting Notes",
                  notes: [],
                  fullname: foundteacher.fullname,
                  subject: foundteacher.subject,
                  username: foundteacher.username
                });
              } else {
                return res.status(200).json({
                  status: "success",
                  notes: notes,
                  fullname: foundteacher.fullname,
                  subject: foundteacher.subject,
                  username: foundteacher.username
                });
              }
            });
          } else {
            return res.status(401).json({
              status: "failed",
              message: "incorrect password"
            });
          }
        });
      }
=======
        status:"failed",
        message:"could not find user",
        err:err
      })
    }else{
      if(foundteacher){
    //  bcrypt.compare(password, foundteacher.password, function(err, res2) {
    //    if(res2===true){
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
       //});
      //}
>>>>>>> 5b3136d37f1b019c9762a4aa18cdb0c3f825f14e
    }
  });
});

app.listen(port, () => {
  console.log("App started on " + port);
});
