import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Gaurav" age={21} />
      <Card user="Shrishti" age={20} />    
    </div>
    
  )
}


export default App
