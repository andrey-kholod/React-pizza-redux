import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './pages/Menu.tsx'
import { Cart } from './pages/Cart.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import { Layout } from './layout/Menu/Menu.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
