const express = require("express");
const app = express();

let port = 3000;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);   // listen to response 
});

app.get("/", (req,res)=>{                 // used to link routes
    res.send("Hello, I am root.");
});


app.get("/:username/:id", (req,res)=>{             // path parameters 
    let { username, id } = req.params;
    res.send(`Welcome to the page of @${username}.`);
});
app.get("/search",(req,res)=>{                 //search query
    let {q} = req.query;
    if (!q){
        res.send("No search query");
    }
    res.send(`There are the results for :${q}`);
 
});