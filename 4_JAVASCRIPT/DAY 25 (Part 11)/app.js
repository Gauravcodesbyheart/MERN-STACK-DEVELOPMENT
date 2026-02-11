 // How actually the call stack creted.
 
 function hello(){
    console.log("We are inside the hello function");
    console.log("Hello");
    
};

function demo (){
    console.log("We are calling the hello function.");
    hello();
    
}
console.log("We are calling the demo function.");
demo();
console.log("Done");

   // visualising the call stack
function one(){
    return 1;
}
function two(){
    return one()+one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}

three();

// breakpoints in  call stacks



h1 = document.querySelector("h1");

function changeColor(color,delay, nextColorChange){
    setTimeout( ()=>{
        h1.style.color = color;
        nextColorChange();
    },delay);
}

  

// callback nesting also called callback hell

changeColor("red",1000, ()=> {
    changeColor("orange", 1000, ()=> {
    changeColor("green", 1000, ()=> {
    changeColor("yellow", 1000, ()=> {
    changeColor("blue", 1000 );
});
});
});
});
  /// Promises

  function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed>4){
        success();
        console.log("Your data was saved: ", data);
    }
    else{
        failure();
        console.log("Weak connection. Data not saved");
    }
  }

  savetoDb("Gaurav Singh",  
    ()=>{
    console.log("Success: Your data was saved. ");  
    savetoDb(
        "Hello World",
    ()=>{
        console.log("Success 2: Data 2 Saved.");
    },
    ()=>{
        console.log("Failure2 : Weak connection");
    }
);
},
()=>{
    console.log("Failure: Weak connection. Data not saved");
}
);

  // refactoring with promises

function savetoDB(data){
    return  new Promise ((resolve,reject)=>{
        let internetSpeed=Math.floor((Math.random()*10)+1);
        if (internetSpeed>4){
            resolve("Success:Data was saved.");
        }
        else{
            reject("Failure: Weak connection.");
        }
    });
}
savetoDB("Gaurav singh")
.then(()=>{
    console.log("Promise Resolved.");
})
.catch(()=>{
    console.log("Promise Rejected.");
});
   // promise chaining 
savetoDB("Gaurav Singh")
.then ( ()=>{
    console.log("Data 1 saved.");  // return when data 1 save
    savetoDB("Hello world");
})
.then ( ()=>{
        console.log("Data 2 saved.");    // return when data 2 save
        return savetoDB("Saurav Singh");
    })
.then ( ()=>{
    console.log("Data 3 saved.");
})
.catch( ()=>{
    console.log("Promise was rejected.");   //return when any of data not save withr one , two or both 
});
      


     // Results and Errors in Promises.

savetoDB("Gaurav Singh")
.then ( (result)=>{
    console.log("Data 1 saved.");  // return when data 1 save
    console.log(result);
    savetoDB("Hello world");
})
.then ( (result)=>{
        console.log("Data 2 saved."); 
        console.log(result);   // return when data 2 save
        return savetoDB("Saurav Singh");
    })
.then ( (result)=>{
    console.log("Data 3 saved.");
    console.log(result);
})
.catch( (error)=>{
    console.log("Promise was rejected."); 
    console.log(error);  //return when any of data not save withr one , two or both 
});