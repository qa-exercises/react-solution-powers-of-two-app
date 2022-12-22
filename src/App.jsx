import './style.css'
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)

  function double() {
    setCount(count * 2)
  }

  return (
    <main>
      <h1>📈 Powers of two</h1>
      <h2>{count.toLocaleString()}</h2>
      <button onClick={double}>x2</button>
    </main>
  )
}
