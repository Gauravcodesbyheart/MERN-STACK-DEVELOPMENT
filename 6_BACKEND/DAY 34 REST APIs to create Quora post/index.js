const express = require ("express");                   
const app = express();
const port = 8080;
const path = require("path");  //to these thes all in index.js we needed to require this all 
const { v4: uuidv4 } = require('uuid');    // for getting the uuids for unique strings , version four for creating IDs
const methodOverride = require("method-override");    //For using the patch route we needed to update 

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));  // setting views folder

app.use(express.static(path.join(__dirname,"public")));   // setting public folder


let posts = [
    {   id : uuidv4(),
        username :"Apna college",
        content : "I love coding",
    },
    {   
        id : uuidv4(),
        username :"Gaurav Singh",
        content : "I love to confront the fear",
    },
    {   
        id : uuidv4(),
        username :"Shrishti kanak",
        content : "I love Gaurav",
    }    
]
// Index route- get all information 
app.get ("/posts",(req,res)=>{
    res.render("index.ejs", {posts});  // post from index.js we wish to send to index.ejs so {posts} used here
});
// create route - add new post 
app.get ("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{            
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content});
    console.log(req.body);
    res.redirect("/posts");  // when new form data sent then redirects to all posts page 
});

app.get ("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p)=>id === p.id);  // when request data from browser to the server then request for valid id only as limited data is available only there.
    res.render("show.ejs",{post});
    console.log(post);    
});

app.patch("/posts/:id", (req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{     // edit route - edit the post's content
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id", (req,res)=>{   // delete route - delete  post and redirect to all posts
    let { id } = req.params;
    posts = posts.filter ((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("Listening to port : 8080");
});

                                           


