// learning of lecture 1,2 3,4 and 5

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');  // require my sql 

const connection = mysql.createConnection({      //establish connection with database created in my sql 
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Gauravsingh@786',
});

// INSERT the data into table named user
// let q = "INSERT INTO user (id, username, email,password) VALUES(?, ?, ?, ?)";
 let q = "INSERT INTO user (id, username, email,password) VALUES ?";
// let user = ["123", "123_newuUser", "abc@gmail.com","abc"];
let users = [["123b", "123_newuUserb", "abc@gmail.comb","abcb"],  // when we want ot insert multiple data by array 
             ["123c", "123_newuUserc", "abc@gmail.comc","abcc"]
            ];
// let q = "SHOW TABLS";
try{                                           // to use the database or get the databse written insdie the try and catch block 
connection.query(q, [users], (err, result)=>{  // users written in [] as it is names as array and data passed using array
    if (err) throw err;
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]);
});


}
catch (err){
    console.log(err);
}

connection.end();

// let  createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };
// let  getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//   };
// };
