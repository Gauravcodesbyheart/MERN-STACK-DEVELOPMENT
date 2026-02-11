import React from 'react'

function Card (props) {

    console.log(props.user, props.age);
  return <div className="card">
        <img src="https://images.unsplash.com/photo-1768886834010-c577b64ab8e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, illum?</p>  
        <button>View Profile</button>    
    </div>

}

export default Card

