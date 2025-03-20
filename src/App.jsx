import { useState } from 'react'
import './App.css'
import Train from "./components/train.jsx";
import Trainv2 from "./components/trainv2.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/*<Train />*/}
        <Trainv2 />
    </>
  )
}

export default App
