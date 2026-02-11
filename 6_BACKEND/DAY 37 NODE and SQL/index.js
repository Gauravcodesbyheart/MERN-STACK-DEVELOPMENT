const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');  // require my sql
const express = require("express");
const app =  express();
const path = require ("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");  // for templating 
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({   // establish connection with database created in my sql 
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Gauravsingh@786'
});

let  getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

 let q = "INSERT INTO user (id, username, email,password) VALUES ?";
let data = [];
for (let i=1;i<=100;i++){
    data.push(getRandomUser());   // get data of 100 fake users using faker 
}

// try{                                           
// connection.query(q, [data], (err, result)=>{    //enter the result into the database
//     if (err) throw err;
//     console.log(result);
// });

// }
// catch (err){
//     console.log(err);
// }

// connection.end();

// get reuqest for server used to run server, This is used to show no. of users 
app.get("/",(req,res)=>{   
    let q = `SELECT count(*) FROM user`;
    try{                                           
    connection.query(q,(err, result)=>{     
    if (err) throw err;
    let count = (result[0]["count(*)"]);  // to get the response on the backend 
    res.render("home.ejs", {count} );     // to send the response on the browser 
});
}
catch (err){
     console.log(err);
     res.send("Some error in DB");
}              
});
   // To show the number of users
app.get("/user",(req,res)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      console.log(users);
      res.render("showusers.ejs",{users});
    });
  }catch(err){
    res.send("Some error occured.");
  }
});

//EDIT route
app.get("/user/:id/edit",(req,res)=>{
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("Some error occured in DB.");
  }  
})

// update Db route 
app.patch("/user/:id",(req,res)=>{
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;  // password from user dB
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if (formPass!=user.password){
        res.send("Wrong Password");
      }
      else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
        connection.query(q2,(err,result)=>{
          if (err) throw err;
          res.redirect("/user");
        });
      }

    });
  }catch(err){
    console.log(err);
    res.send("Some error occured in DB.");
  }  

});

app.listen("8080",()=>{
    console.log("Server is listening to port 8080");
});
