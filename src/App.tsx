import { MouseEvent, useState } from 'react'
import Button from './components/Button/Button'

function App() {
  const [counter, setCounter] = useState<number>(0)
  console.log(counter)

  const addCounter = (e: MouseEvent) => {
    console.log(e.target)
  }

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  )
}

export default App
