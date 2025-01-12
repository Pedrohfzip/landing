import { useState } from 'react'
import './App.css'
import statueImg from '../public/estatuaAdvogada.png'
import logo from '../public/Logo.png'
import Header from './components/header'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container  h-100 w-100'>
        <Header/>
      </div>
     
    </>
  )
}

export default App
