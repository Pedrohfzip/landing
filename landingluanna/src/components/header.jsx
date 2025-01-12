import { useState } from 'react'
import '../App.css'
import statueImg from '../../public/estatuaAdvogada.png'
import logo from '../../public/Logo.png'
import background from '../../public/background.jpeg'
import fotoLuana from '../../public/fotoLuana.jpg'
export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
          className='m-0 p-0 row w-100 position-relative'
          style={{
     
            overflow: 'visible', // Permite o efeito "pra fora" da div
          }}
      >
        <div className='row d-flex m-0 p-0 d-flex justify-content-center mt-5' >
            <div className='col-6 logo-width  d-flex justify-content-center m-auto'>
              <img
                src={logo}
                alt="Logo"
                className="statue-img logo-animation m-0 p-0"
                style={{
                   
                    width: '90%',
                 // Ajusta a logo para ocupar no máximo 80% da largura da div,   // Mantém a proporção da logo
                }}
              />
            </div>
        </div>
       <div className='row justify-content-end text-end m-0 p-0'>
            <div className='d-flex gap-3 align-items-center justify-content-end text-end m-0 p-0'>
              {/* Ícone do WhatsApp */}
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i 
                  className="fab fa-whatsapp fa-2x" 
                  style={{ color: 'black' }} 
                ></i>
              </a>

              {/* Ícone do Instagram */}
              <a 
                href="https://www.instagram.com/luanamattosadvogada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i 
                  className="fab fa-instagram fa-2x" 
                  style={{ color: 'black' }} 
                ></i>
              </a>
            </div>
        </div>

        <div className='row d-flex m-0 p-0 d-flex j mt-4 text-justify' >
          <div className='col-6 logo-width   justify-content-center m-auto mt-5' style={{
            zIndex: '1',
          }}>
            <h1 className='logo-animation text-justify ' style={{
                fontSize: '2.6rem',
            }}>
              Você Tem Direito a um
              <span style={{ background: '#B56E3C' }} className='p-2 text-justify'><strong>Benefício Previdenciário?</strong></span>
            </h1>
            <h2 className='logo-animation mb-5'> Descubra Agora com a
              Advogada Luana Mattos!</h2>
            <h3 className='logo-animation mt-5 text-justify '>Especialista em Direito Previdenciário, pronta para garantir que seus direitos sejam respeitados e seus benefícios pagos corretamente.</h3>
              <div className='text-center mt-4'>
              <button
                className='btn mt-3 btn-primary btn-lg px-5 w-100'
                style={{
                  backgroundColor: '#153C41',
                  borderColor: '#153C41',
                  fontSize: '2rem',
                }}
              >
                Agende sua Consulta
              </button>
            </div>
          </div>
          <div  className='col-6 logo-width align-items-center   justify-content-center m-auto mt-5'>
        
              <img
            src={fotoLuana}
            alt="Estátua"
            className=" m-0 p-0 d-flex logo-animation align-items-center mt-5"
            style={{
              width: '100%',
              boxShadow: '7px 3px 10px 2px rgba(0, 0, 0, 0.5)',
            }}
           
            />
            <p className='mt-2'>Luana Mattos, Pós-Graduada em Prática Previdenciária</p>
          </div>
        </div>
   
        </div>

    </>
  )
}


