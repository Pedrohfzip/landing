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
      {/* <div className='container border h-100 w-100'>
        <div
          className='m-0 p-0 row w-100 position-relative'
          style={{
            height: '600px',
            overflow: 'visible', // Permite o efeito "pra fora" da div
          }}
        >
          <div className='row d-flex m-0 p-0 d-flex justify-content-center'>
            <div className='col-6 d-flex justify-content-center m-auto'>
              <img
                src={logo}
                alt="Logo"
                className="statue-img m-0 p-0"
                style={{
                  maxWidth: '80%',
                  minWidth: '80%',// Ajusta a logo para ocupar no máximo 80% da largura da div
                  height: 'auto',   // Mantém a proporção da logo
                }}
              />
            </div>
          </div>
   
        
          <img
            src={statueImg}
            alt="Estátua"
            className="statue-img m-0 p-0"
            style={{
              position: 'absolute',
              bottom: '-150px', // Faz a imagem sair da div
              right: '5%', // Alinha a imagem ao lado direito
              height: '600px', // Altura da imagem
              width: '500px',
              zIndex: '1',
              opacity: '70%',
            }}
            className="statue-img-responsive"
          />
        </div>
      </div> */}
    </>
  )
}

export default App
