console.log("Create the function which return the odd or even on the basis of request made");
function oddOrEvenFactory(request){
    if (request="odd"){
        let odd = function(n){
        console.log(!(n%2==0));
    }
    return odd;
}   
    else if(request=="even"){
        let even = function(n){
        console.log(n%2==0);
    }
    return even;
}
    else {
        console.log("Wrong request");
    }
}
let request = "even";
oddOrEvenFactory(request);