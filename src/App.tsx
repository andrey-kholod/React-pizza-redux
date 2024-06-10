import { MouseEvent, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'
import { ErrorPage } from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

function App() {
  const [counter, setCounter] = useState<number>(0)

  const addCounter = (e: MouseEvent) => {
    console.log(e.target)
  }

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='Email' />
      <div>
        <a href="/">Menu</a>
        <a href="/cart">Cart</a>
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
