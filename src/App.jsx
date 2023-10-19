import { useState } from 'react';
import './App.css'

function App() {

  let[superman,setsuperman ] = useState(0);
  // let counter= 5;
  const addvalue = ()=>
  {
    setsuperman(superman+1);
  }


  const removevalue=()=>
  {
    if(superman>0)
    {
      setsuperman(superman-1);
    }
    
  }

  return (
    <>
      <h1>SIMPLE COUNTER</h1>
      <h2>Counter value : {superman}</h2>
      <button onClick={addvalue} className='button-50' >Add value</button>
      <br />
      <button onClick={removevalue} className='button-50'>remove value</button>
    </>
  )
}

export default App
