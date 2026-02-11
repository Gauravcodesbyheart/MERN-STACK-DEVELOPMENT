import React from 'react'
import Card from "../components/Card"
import Navbar from '../components/navbar'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Gaurav Singh</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sed.</p>
      </div>
      {Card()}
      <Card />
      
      <Navbar />
    </div>
  )
}

export default App
