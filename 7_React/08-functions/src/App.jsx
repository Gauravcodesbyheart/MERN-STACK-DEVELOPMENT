import React from 'react'

const App = () => {


  function btnClicked(){
    console.log('button is clicked');
  }


  return (
    <div>
      <h1>Hello, Gaurav Singh</h1>
      <button onClick={btnClicked}>Click here</button>
      <input  onChange={()=>{
        console.log("input par likha jaa raha hai ")
      }} type="text" placeholder='Enter Name' />
      <input  onChange={function (elem){
        console.log(elem.target);
        
        
      }} type="text" placeholder='Enter Name' />      
      <button onClick={function(){   // direct function created.
        console.log("Hello Guys");
      }}>Click Here</button>
    </div>
  )
}

export default App
