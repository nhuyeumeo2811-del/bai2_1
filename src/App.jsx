import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-title'>
        <Welcome name="26spit3"></Welcome>
        <p>Họ tên:Nguyễn Ngọc Quỳnh Như</p>
        <p>Sở thích: </p>
      </div>
    </>
  )
}

export default App
