const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended: true}));  // to read the encoded data 
app.use(express.json());  // to read the json form of data 
app.get("/register", (req,res)=>{
    let {user,password}= req.query;  // to access the user data in get response by accessing the query string 
    res.send(`Standard GET response. Welcome ${user}!`);
});

app.post("/register",(req,res)=>{
    let {user,password}= req.body; // post request stores data in the body part of the code
    res.send(`Standard POST response. Welcome ${user}!`);
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
