const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", (err, data) => {
  if(err){
    console.log("ERROR: ", err);
  }else{
    user = JSON.parse(data);
  }
});

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
  res.render("reja");
});

app.post("/create-form", function(req, res){
  const list = req.headers;
  res.json({test: req.body});
})

app.get("/gift", function(req, res){
  res.end(`<h1/ style="color:green">Siz Sovg'lar bolimidasiz!</h1>`);
})

app.get("/author", (req, res) => {
  res.render("author", {user: user});
})


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
  console.log(`The server is running seccessfully on port: ${PORT}, http://localhost:${PORT}`);
})