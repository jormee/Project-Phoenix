require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const uuid = require("uuid");
const md5 = require("md5");

const app = express();

//connect to atlas db
mongoose
  .connect(
    `mongodb+srv://chinedu:chinedu@pheonix-n9ifq.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
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

//texted and working
app.get("/teachers", (req, res) => {
  Teacher.find({}, (err, teachers) => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        err: err
      });
    }
    return res.status(200).json({
      status: "success",
      data: teachers
    });
  });
});

//tested and working
app.get("/notes", (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        message: "something went wrong",
        err: err
      });
    }
    return res.status(200).json({
      status: "success",
      notes: notes
    });
  });
});

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

//tested and working
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

//tested and working
app.post("/signup", (req, res) => {
  const { fullname, username, subject, password } = req.body;
  const newTeacher = new Teacher({
    fullname: fullname,
    username: username,
    subject: subject,
    password: md5(password)
  });
  newTeacher.save(err => {
    if (err) {
      return res.status(400).json({
        status: "failed",
        message: "Teacher counld no be save ",
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
  });
});

//tested and working
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  Teacher.findOne({ username: username }, (err, foundteacher) => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        message: "Could not find teacher",
        err: err
      });
    } else {
      if (foundteacher) {
        if (foundteacher.password == md5(password)) {
          return res.status(200).json({
            status: "success",
            fullname: foundteacher.fullname,
            subject: foundteacher.subject,
            username: foundteacher.username
          });
        } else {
          return res.status(401).json({
            status: "failed",
            message: "incorrect password"
          });
        }
      } else {
        return res.status(404).json({
          status: "failed",
          message: "No teacher with the given username"
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log("App started on " + port);
});
