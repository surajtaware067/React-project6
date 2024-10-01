import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Transactions from './pages/Dashboard/Components/Transaction'
import Support from './pages/Support/Support.jsx'
import Transaction from './pages/Transaction/Transaction.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transaction",
    element: <Transaction/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);
function App() {


  return (
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}

export default App
