import { MouseEvent, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { Route, Routes } from 'react-router-dom'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'
import { ErrorPage } from './pages/ErrorPage'

function App() {
  const [counter, setCounter] = useState<number>(0)
  console.log(counter)

  const addCounter = (e: MouseEvent) => {
    console.log(e.target)
  }

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence='big' onClick={addCounter}>Кнопка</Button>
      <div>
        <a href="/">Menu</a>
        <a href="/cart">Cart</a>
      </div>
      <Input placeholder='Email'/>
      <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
