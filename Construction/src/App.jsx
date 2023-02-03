import { useState } from 'react'

import './App.css'
import Login from './Components/Login';
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Login />
    </>
  )
}

export default App
