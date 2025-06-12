const express = require("express");
const app = express();
const fs = require("fs");

// let user;
// fs.readFile("database/user.json", (err, data) => {
//   if(err){
//     console.log("ERROR: ", err);
//   }else{
//     user = JSON.parse(data);
//   }
// });


// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session Code

// 3 Views Code
app.set("views", "views");
app.set("view engine", "ejs");
// 4 Routing Code
app.get("/", function(req, res){
  console.log("user entered /");
  db.collection("plans").find().toArray((err, data) => {
    if(err){
      console.log(err);
      res.end("something went wrong");
    }else{
      res.render("reja", { items: data });
    }
  })
});

app.post("/create-item", function(req, res){
  console.log("user entered /create-item");
  const new_reja = req.body;
  db.collection("plans").insertOne(new_reja, (err, data) => {
    res.json(data.ops[0]);
  })
})


app.post("/delete-item/:id", function(req, res){
  console.log("user entered /delete-item");
  let delItemId = req.params.id;
  db.collection("plans").deleteOne({_id: mongodb.ObjectId(delItemId)}, (err, data) => {
    res.json({state:"success"});
  })
})


app.post("/edit-item/:id", function(req, res){
  console.log("user entered /edit-item");
  let editItemId = req.params.id;
  const newData = req.body;
  db.collection("plans").findOneAndUpdate({_id: mongodb.ObjectId(editItemId)},{$set: {reja: newData.newInput}}, (err, data) => {
    res.json({data: newData.newInput});
  })
})

// app.get("/author", (req, res) => {
//   res.render("author", {user: user});
// })

module.exports = app;