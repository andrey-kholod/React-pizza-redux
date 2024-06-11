import { MouseEvent, useState } from 'react'

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
