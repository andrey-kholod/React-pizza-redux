import { MouseEvent, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { Link } from 'react-router-dom'


function App() {
  const [counter, setCounter] = useState<number>(0)

  const addCounter = (e: MouseEvent) => {
    console.log(e.target)
  }

  return (
    <>
      {/* <div>
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart</Link>
      </div>
       */}
    </>
  )
}

export default App
