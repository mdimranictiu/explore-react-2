import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './User'


function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2= ()=>{
    alert('Button 2 clicked')
  }
  function addTofive(number){
   alert(number+5);
  }

  return (
    <>
      
      <h1>React Core Components</h1>
      <Counter></Counter>
      <Users></Users>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
     <button onClick={()=>{alert('Clicked 3')}}>Click 3</button>
      <button onClick={()=>{addTofive(3)}}>Click 4</button>
    </>
  )
}

export default App
