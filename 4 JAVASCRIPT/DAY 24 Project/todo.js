let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    

    let delBtn = document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value=""
});

ul.addEventListener("click", function(event){  // tells exactly what have been clicked. event.targe,nodeName tells exatly which node have been clicked
    if (event.target.nodeName="BUTTON"){
        
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }   

});

// let delBtns = document.querySelectorAll(".delete");     due to this code bubbling effect come so apply property to parent so that new child list that have been created also inherit the parent property
// for (delBtn of delBtns){
//     delBtn.addEventListener("click",function (){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }