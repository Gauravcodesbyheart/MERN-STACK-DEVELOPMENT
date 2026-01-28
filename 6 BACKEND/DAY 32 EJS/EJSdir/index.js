                   // if any part of code commented out then remove comments from it and view code watch from notes 

const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine" , "ejs");  // sets view engine to ejs and ejs linked to express.js directly 
app.set("views", path.join(__dirname,"/views"));

app.get ("/",(req,res)=>{ 
    res.render("home.ejs");
});

app.get ("/hello",(req,res)=>{
    res.send("hello");    // used to send hello written on browser directly
});

app.get("/rolldice", (req,res)=>{                  // parsing data to ejs 
    let diceVal = Math.floor(Math.random()*6)+1; 
    res.render("rolldice.ejs", {num : diceVal});   //key and value pair in the object key is num and value is diceVal also same name can be usd for both 
});

app.listen (port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/ig/:username", (req,res)=>{   // 06.instagramn ejs for different usernames create routes 
    const followers = ["adam","bob","steeve","sunita","Premanand ji maharaj"];  //07.conditional in ejs 
    let {username} = req.params;
    res.render("instagram.ejs",{username, followers});
});

app.get("/ig1/:username",(req,res)=>{  
    let {username} = req.params;              //route handler 
    const instaData = require("./data.json"); // visits the local json file and store data in instadata
    const data = instaData[username];         //data = instadata["cats"] as per data you van have choice for valid data only when cats and dogs are there
    console.log(data);                        // print data i.e, cat or dog in the terminal 
                                              //  In Express.js, the res.render() method is used to render a view/template file (like EJS, Pug, Handlebars) and send the HTML output to the browser.
    if (data){
        res.render("instagram1.ejs",{data });
    }
    else{
       res.render("error.ejs"); 
    }
});

