const express = require("express");
const app = express();

let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
});
// for sending a response -04
// app.use( (req,res)=>{
//     console.log("request Received.");
//     console.log(req); // various resuest methods printed when searched localhost:8080 from browser but keep in mind the file node index.js must be runned 
//     // res.send("This is a basic response.");
//     res.send({
//         name: "apple",
//         color: "red",
//     });  
// Give response when search on  browser as Localhost:8080 then on browser response given as this is a basic response.
// });



/// for sending response for routes on different routes different response provided
app.get("/", (req,res)=>{
    res.send("You contacted root path.");
});




app.get("/apple", (req,res)=>{
    res.send("You contacted apple path.");
});
 

app.get("/orange", (req,res)=>{
    res.send("You contacted orange path.");
});

// app.get("/*", (req,res)=>{
//     res.send("This does path doesn't exist.");   //It uses * as a wildcard to catch all GET requests not matched by previous routes.
// });

app.use((req, res) => {
    res.status(404).send("This path doesn't exist.");   // it handles all the conditions in which the rioute does n't match to all above routes
});










