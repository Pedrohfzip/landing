import { useState } from 'react'
import '../App.css'
import statueImg from '../../public/estatuaAdvogada.png'
import logo from '../../public/Logo.png'

export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div
          className='m-0 p-0 row w-100 position-relative'
          style={{
            height: '200px',
            overflow: 'visible', // Permite o efeito "pra fora" da div
          }}
        >
        <div className='row d-flex m-0 p-0 d-flex justify-content-center mt-5'>
            <div className='col-6 logo-width  d-flex justify-content-center m-auto'>
              <img
                src={logo}
                alt="Logo"
                className="statue-img logo-animation m-0 p-0"
                style={{
                   
                    width: '100%',
                 // Ajusta a logo para ocupar no máximo 80% da largura da div,   // Mantém a proporção da logo
                }}
              />
            </div>
        </div>
        <div className='row d-flex m-0 p-0 d-flex j mt-5'>
        <div className='col-6 logo-width  d-flex justify-content-center m-auto'>
              <img
                src={logo}
                alt="Logo"
                className="statue-img logo-animation m-0 p-0"
                style={{
                   
                    width: '100%',
                 // Ajusta a logo para ocupar no máximo 80% da largura da div,   // Mantém a proporção da logo
                }}
              />
        </div>
        <div className='col-6 logo-width  d-flex justify-content-center m-auto'>
            <img
                src={logo}
                alt="Logo"
                className="statue-img logo-animation m-0 p-0"
                style={{
                   
                    width: '100%',
                 // Ajusta a logo para ocupar no máximo 80% da largura da div,   // Mantém a proporção da logo
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
              bottom: '-300px', // Faz a imagem sair da div
              right: '3%', // Alinha a imagem ao lado direito
              height: '500px', // Altura da imagem
              width: '500px',
              zIndex: '1',
              opacity: '10%',
            }}
            className="statue-img-responsive statue-animation"
          />
        </div>

    </>
  )
}


