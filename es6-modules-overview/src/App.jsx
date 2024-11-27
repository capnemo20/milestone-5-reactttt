import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Watch'

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(()=>{
    fetch("watches.json")
    .then(res=>res.json())
    .then(data=>setWatches(data))
  }
    ,[])
  // const watches = [
  //   {id: 1, name:"Apple Watch", price: 200},
  //   {id: 2, name:"Samsu Watch", price: 200},
  //   {id: 3, name:"MI Watch", price: 200}
  // ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch =><Watch watch={watch} key={watch.id}></Watch>)
      }
    </>
  )
}

export default App;
