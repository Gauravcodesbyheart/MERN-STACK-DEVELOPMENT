let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let link = await getImages();
    // console.log(link);

    let img = document.querySelector("#result");
    img.setAttribute("src",link);  
    console.log(link);  
});


let url = "https://dog.ceo/api/breeds/image/random";



async function getImages (){
    try {
        let res = await axios.get (url);
        console.log(res);  // note here we don't needed to parse the code as it directly results with the code to readable form to use in JS
        return res.data.message;  // when promise return on browser then see which part have content and access it in the form of object of promise

        let res2 = await axios.get (url);
        return res2.data.fact;

    }
    catch (e){
        console.log("error- ", e);
        return "No image found."
    }

    console.log("Bye");
}