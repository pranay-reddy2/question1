import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('loading')
  useEffect(()=>{
    fetch(link).then((data)=>{
      setCount(json.stringfy(data));
    })
    .catch((error)=>{
      setCount("loading")
    })
  },[]);
  return (
    <p>{count}</p>
  )
  }
  

export default App
