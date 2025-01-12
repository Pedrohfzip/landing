import { useState } from 'react'
import '../App.css'
import statueImg from '../../public/estatuaAdvogada.png'
import logo from '../../public/Logo.png'
import background from '../../public/background.jpeg'
import fotoLuana from '../../public/fotoLuana.jpg'
import { useEffect } from 'react'
import { use } from 'react'
export default function Header({ scrollTo }) {
  
 
  return (
    <>
      <div
        className='m-0 p-0 row w-100 h-100 position-relative'
      
          style={{
            width: '100vw',
            height: '100vh',
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
                className="text-decoration-none logo-animation"
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
                className="text-decoration-none logo-animation"
              >
                <i 
                  className="fab fa-instagram fa-2x" 
                  style={{ color: 'black' }} 
                ></i>
              </a>
            </div>
        </div>

        <div className='row d-flex m-0 p-0 d-flex j mt-4 text-justify' >
          <div className='col-7 logo-width   justify-content-center m-auto mt-5' style={{
            zIndex: '1',
          }}>
            <h1 className='logo-animation text-justify ' style={{
               
            }}>
              Você Tem Direito a um
            </h1>
            <h1 className='w-100 text-white logo-animation'>
              <span style={{ background: '#153C41' }} className=' p-1'><strong>Benefício Previdenciário?</strong></span>

            </h1>
            <h2 className='logo-animation mb-5 logo-animation'> Descubra Agora com a
              Advogada Luana Mattos!</h2>
            <h3 className='logo-animation mt-5 text-justify '><strong> Oi , sou especialista em Direito Previdenciário, pronta para garantir que seus direitos sejam respeitados e seus benefícios pagos corretamente.</strong></h3>
            <div className='text-center mt-4'>
              <button
                className='btn mt-3 btn-primary btn-lg px-5 w-100 logo-animation'
                style={{
                  backgroundColor: '#B56E3C',
                  borderColor: '#B56E3C',
                  fontSize: '2rem',
                }}
              >
                Agende sua Consulta
              </button>
              <span style={{
                fontSize: '1rem',
              }}>Consulta gratuita por 15 minutos para novos clientes! Não perca essa
                oportunidade e proteja seus direitos agora</span>
            </div>
          
          </div>
          <div  className='col-5 logo-width align-items-center   justify-content-center m-auto mt-5'>
        
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
            
            <p className='w-100' style={{
             fontSize: '1.2rem',
            }}>Com mais de 6 anos de experiência em direito previdenciário, a advogada
            Luana Mattos já ajudou centenas de pessoas a conquistar o benefício que é
            delas por direito, com um atendimento especializado e humanizado.</p>
          </div>
            
        </div>
   
      </div>

    </>
  )
}


