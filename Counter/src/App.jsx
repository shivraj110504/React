import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addCount = ()=>{
    if(counter >= 20){
      alert("cannot increase more")
    }else{
      setCounter(counter + 1)
    }
    
  }

  const removeCounter = ()=>{
    if(counter <= 0){
      alert("Cannot decrease more")
    }else{
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>Counter Project using React</h1>
      <h2>Current Count: {counter}</h2>
      <button onClick={addCount}>Add Value</button>
      <button onClick={removeCounter}>Remove Value</button>
      <p>The range is 0 to 20</p>
    </>
  )
}

export default App
