let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    // console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;
});


let url = "https://catfact.ninja/fact";



async function getFacts (){      
    try {
        let res = await axios.get (url);  // note here we don't needed to parse the code as it directly results with the code to readable form to use in JS
        return res.data.fact;

        let res2 = await axios.get (url);
        return res2.data.fact;

    }
    catch (e){
        console.log("error- ", e);
        return "Fact not found."
    }

    

    console.log("Bye");

    
}