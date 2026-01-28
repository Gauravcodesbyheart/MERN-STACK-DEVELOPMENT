console.log("Create a function that returns the conactenation of all strings in the array.");
let arr = ["mango " , "is ", "the ", "most ", "famous ", "and ", "good ", "food ", "that ", "is ", "also ", "considered ", "as ", "the ", "king ", "of ", "all ", "foods "];


    function concat(arr){ 
        let result="";   
    for (let i=0;i<=arr.length;i++){
        result+=arr[i];
    }
    console.log(result);
}
concat(arr);

