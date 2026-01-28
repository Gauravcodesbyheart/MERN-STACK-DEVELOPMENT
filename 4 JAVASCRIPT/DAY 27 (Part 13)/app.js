let url = "https://catfact.ninja/fact";
async function getFacts (){
    try {
        let res = await axios.get (url);  // note here we don't needed to parse the code as it directly results with the code to readable form to use in JS
        console.log(res.data.fact);

        let res2 = await axios.get (url);
        console.log(res2.data.fact);

    }
    catch (e){
        console.log("error- ", e);
    }

    console.log("Bye");
}
let link = "https://universities.hipolabs.com/search?name=";
let country = "nepal";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
});


async function getColleges(country){
    try{
        let res = await axios.get(link+country);
        return res.data;
    }
    catch(e){
        console.log("Error: ", e);
        return [];
    }
}