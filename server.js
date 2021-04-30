//load express
const express = require('express')
const app = express()

const port = process.env.PORT || 8000;

//load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//load mongoose
const mongoose = require('mongoose')

//load models
require('./model/recruiter')
const Recruiter = mongoose.model("Recruiter")

//database connection
mongoose.connect("mongodb+srv://AcornPurpleSquirrel:c5g83kCRgzjBKqNE@acorn.bzwjn.mongodb.net/usersService", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database is connected!")
});

//create function for recruiter
app.post('/addRecruiter', (req, res) => {
  //create a new recruiter
  var recruiter = new Recruiter(req.body)
  recruiter.save().then(() => {
    console.log("One new recruiter is created successfully");
  }).catch((err) => {
    if (err) {
      throw err
    }
  })
  res.send("One new recruiter is created successfully")
});

//read function to get all recruiter
app.get("/getAllRucruiter", (req, res)=>{
  Recruiter.find().then((recruiters)=>{
    res.json(recruiters)
  }).catch((err)=>{
   if(err){
     throw err
   }
  })
});

app.listen(8000, () => {
    console.log("Server started on: " + port)
  });