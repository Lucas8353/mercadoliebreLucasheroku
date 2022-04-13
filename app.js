const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(process.env.PORT || 3030, function()=> 
    console.log("esta funcionando http://localhost:3030")
);

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.post("/register", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/login", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});