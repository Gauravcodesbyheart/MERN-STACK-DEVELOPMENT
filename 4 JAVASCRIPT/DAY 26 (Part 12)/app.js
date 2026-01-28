async function greet (){
    return "Hello world";  // automatically retuns in the promise object form
}
greet()
 .then ( (result)=>{             // stores the outfut of the main function of async or the main function's definition
    console.log("Promise was resolved.");
    console.log("Result was : ", result);
 })
 .catch( (err)=>{
    console.log("Promise was rejected with err :", err);
 })


async function greeting (){
    throw"Some random error.";  // throws out the error 
    return "hello";
}

function getNum(){
    return  new Promise ( (resolve,reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        },1000);
    });
}

async function demo(){
    await getNum ();
    await getNum ();
    await getNum ();
}

let jsonRes = '{ "fact": "Cats respond most readily to names that end in an \\\\ee\\\\\\" sound.", "length": 65 }';
let validRes = JSON.parse(jsonRes);

console.log(validRes);
console.log(validRes.fact);

// requesting our first api

let url = "https://catfact.ninja/fact";
fetch (url)
.then( (res)=>{
    console.log(res);
    return res.json();  //extract json data, parse json 
    })                  //Calling res.json() reads the response body and parses it into a JavaScript object (if the response is valid JSON).
.then ( (data)=>{
    console.log(data.fact);
})
.catch ( (err)=>{
    console.log("ERROR - ",err);
});

// using awaits with async 


let link = "https://catfact.ninja/fact";
fetch(link);
async function getFacts(){
    try{
        let res1 = await fetch(link);
        let data1 = await res1.json();
        console.log("data1 - ",data1);

        let res2 = await fetch(link);
        let data2 = await res2.json();
        console.log("data2 - ",data2);
    }
    catch (e){
        console.log("error:",e);
    }
}
getFacts();



