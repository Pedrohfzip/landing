import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import './style.css';
import logo from '../../public/img2header.jpeg'; // Caminho para a imagem de fundo alternativa
import logo2 from '../../public/back2.png'; // Caminho para a imagem de fundo alternativa
import logoMarca from '../../public/logo.png'; // Caminho para a imagem de fundo alternativa
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header({ scrollToSection }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu
  const quemSomosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollTo = (refName) => {
    if (refName === 'quemSomosRef' && contatoRef.current) {
      contatoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Alterna a visibilidade do menu
  };

  return (
    <>
      <div className="header-container p-0 m-0">
        {/* Logo exibido apenas em telas pequenas */}
        {isMobile && (
          <>
            <div className='w-100 h-100 d-flex flex-column ' >
                <div className='p-5' style={{ background: "#153C41" }}>
                    <img
                      src={logoMarca}
                      alt="Background"
                      className='m-0 d-flex align-items-center'
                      style={{
                        zIndex: -1,
                    
                        // height: '100%',
                        // Mantém a proporção
                      }}
                />
                 
                  </div>
                  <div className='d-flex align-items-center'>

                        <img
                    src={logo}
                    alt="Background"
                    className='m-0'
                    style={{
                      // position: 'absolute',
                      objectFit: 'cover',
                      zIndex: -3,
                      width: '100%',
                      height: '100%', // Mantém a proporção
                    }}
                  />
                  </div>
            </div>
          </>
        )}
          {!isMobile && (
          <img
            src={logo2}
            alt="Background"
            className='m-0'
            style={{
              zIndex: -1,
              // height: '100%', // Mantém a proporção
            }}
          />
        )}

        <div id='navbar' className="header-content d-flex justify-content-start align-items-center p-3">
           {!isMobile && (
       <>
   
          <a href="https://wa.me/5549999089980" target="_blank" rel="noopener noreferrer" className="text-decoration-none logo-animation me-1">
            <i className="fab fa-whatsapp fa-2x me-5" style={{ color: 'white' }}></i>
          </a>
          <a href="https://www.instagram.com/luanamattosadvogada/" target="_blank" rel="noopener noreferrer" className="text-decoration-none logo-animation ms-1">
            <i className="fab fa-instagram fa-2x" style={{ color: 'white' }}></i>
          </a>
        
     
         
          
              <span onClick={() => scrollToSection('servicos')} className="text-decoration-none logo-animation ms-5 text-white" style={{ cursor: 'pointer' }}>
                Serviços
              </span>
              <span onClick={() => scrollToSection('contatoRef')} className="text-decoration-none logo-animation ms-5 cursor-pointer text-white" style={{ cursor: 'pointer' }}>
                Contato
              </span>
              </>
          )}
          <div className='m-0 p-0 flex-wrap'>

       {isMobile && (
          <button onClick={toggleMenu} className="navbar-toggler text-white align-items-center d-flex text-center justify-content-center p-2">
            <i className="fas fa-bars fa-2x text-white"></i> {/* Ícone de três linhas (hamburger) */}
          </button>
        )}

          {/* Menu de 3 linhas (hamburger) em telas pequenas */}
          {isMobile && menuVisible && (
              <div className="mobile-menu d-flex flex-column text-centet" style={{ backgroundColor: '#153C47', padding: '10px', display: 'flex', borderRadius: '15px' }}>
                   <a href="https://wa.me/5549999089980" target="_blank" rel="noopener noreferrer" className="text-decoration-none logo-animation me-1">
                <i className="fab fa-whatsapp fa-2x me-5" style={{ color: 'white' }}></i>
              </a>
              <a href="https://www.instagram.com/luanamattosadvogada/" target="_blank" rel="noopener noreferrer" className="text-decoration-none logo-animation ms-1">
                <i className="fab fa-instagram fa-2x" style={{ color: 'white' }}></i>
              </a>
        
              <span onClick={() => scrollToSection('servicos')} className="text-decoration-none logo-animation  text-white" style={{ cursor: 'pointer', display: 'block' }}>
                Serviços
              </span>
              <span onClick={() => scrollToSection('contatoRef')} className="text-decoration-none logo-animation  cursor-pointer text-white" style={{ cursor: 'pointer', display: 'block' }}>
                Contato
              </span>
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Menu Responsivo - Exibido apenas quando o estado "menuVisible" for true */}


      <div className="header-text-container d-flex justify-content-center flex-wrap text-white m-0" style={{ background: "#153C41" }}>
        <div className="d-flex justify-content-center">
          <h1 className="header-text text-white d-flex justify-content-center" style={{ background: "#153C47", fontSize: "2rem", padding: "10px" }}>
            Você Tem Direito a um Benefício Previdenciário? Descubra Agora com a Advogada Luana Mattos!
          </h1>
        </div>

        <div className="d-flex w-100 justify-content-center mt-5">
         <a 
          href="https://wa.me/5549999089980" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button 
            className="btn btn-lg btn-warning text-uppercase fw-bold" 
            style={{ 
              padding: "15px 30px", 
              fontSize: "1.5rem", 
              borderRadius: "5px", 
              backgroundColor: "#FFC107", 
              color: "#153C41", 
              border: "none", 
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", 
              cursor: "pointer" 
            }}

          >
            Agende seu Horário AGORA!
          </button>
        </a>

        </div>

        <div className="d-flex justify-content-center">
          <h3 className="header-text text-white" ref={quemSomosRef} id="quemSomosRef" style={{ background: "#153C41", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", padding: "10px" }}>
            Consulta gratuita por 15 minutos para novos clientes! Não perca essa oportunidade e proteja seus direitos agora.
          </h3>
        </div>
      </div>
    </>
  );
}
