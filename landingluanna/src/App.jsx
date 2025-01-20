import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/services';
import Testimonials from './components/reviews';
import fotoLuana from '../public/fotoLuana.jpg';
import vidro from '../public/Glass-Store.jpg';
import placa from '../public/Identidade visual Luana Mattos.png';

function App() {
  const section1Ref = useRef(null); // Referência para a primeira seção
  const section2Ref = useRef(null); // Referência para a segunda seção

  const contatoRef = useRef(null);
   const servicos = useRef(null);

  const scrollToSection = (refName) => {
    if (refName === 'contatoRef' && contatoRef.current) {
      contatoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (refName === 'servicos' && servicos.current) {
      servicos.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]);

  return (
    <>
      <Header scrollToSection={scrollToSection}/>

      <div className="row text-center m-0 p-0 mt-5 " ref={servicos} id='servicos'>
        <h4
          className="logo-animation cursor mb-5 mt-5"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(section2Ref)} // Chama a função com a referência da próxima seção
        >
          Serviços
      
        </h4>
        <Services />
      </div>

      <div
        id="section3"
        className="logo-animation h-100 w-100 mt-5 m-0"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
          <h4
          className="logo-animation cursor  text-center"
          style={{
            cursor: 'pointer',
          }}
         // Chama a função com a referência da próxima seção
        >
          Avaliações
     
        </h4>
   
        <img
          src="balanca.png"
          alt="Balança da Justiça"
          style={{
            position: 'absolute',
            width: '18%',
            bottom: '0%',
            zIndex: -1,
          }}
        />
        <div style={{height: '100%'}}>

        <Testimonials />
        </div>
      </div>

      <div
        id="section4"
        className="logo-animation h-100 w-100 text-center pt-2 pb-5 m-0"
        style={{
          background: '#153C41',
          color: '#fff',
        }}
      >
        <div className="row m-0">
          {/* Coluna da imagem */}
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <img
              src={placa}
              alt="Placa"
              className="m-0 p-0 logo-animation "
              style={{
                width: '100%',
                borderRadius: '10px',
              }}
            />
          </div>

          {/* Coluna do texto */}
          <div className="col-md-6 p-5 h2-custom-font text-start d-flex flex-column justify-content-between">
            <h2 className="mb-4">Benefícios de Contratar Luana Mattos</h2>
            <ul
              className="list-unstyled d-flex flex-column mb-5"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              <li className="mb-3 justify-text">
                <h4 className='m-0 p-0'>● Especialização Reconhecida:</h4>
                <br />
                Com mais de 6 anos de experiência em direito previdenciário, a advogada
                Luana Mattos já ajudou centenas de pessoas a conquistar o benefício que é
                delas por direito, com um atendimento especializado e humanizado.
              </li>
              <li className="mb-3">
                <h4 className='mt-3 p-0'>● Transparência em Cada Etapa:</h4>
                <br />
                Você recebe explicações claras sobre o andamento do seu caso,
                sem surpresas ou dúvidas.
              </li>
              <li>
                <h4 className='mt-3 p-0'> ● Consultoria Inicial sem Compromisso:</h4>
                <br />
                Avaliação prévia para você entender suas possibilidades antes de
                tomar qualquer decisão.
              </li>
            </ul>
          </div>
          <div className="d-flex w-100 justify-content-center my-3">
          </div>
          
        </div>
        <div className='row d-flex justify-content-center text-center align-items-center flex-wrap'>
          <div className='col-xl-6 col-md-12 '>
              <img
              src={vidro}
              alt="Placa"
              className="m-0 p-0 logo-animation"
              style={{
                width: '100%',
                borderRadius: '10px',
              }}
            />
          </div>   
          <div className='col-xl-6 col-md-12  align-items-center d-flex flex-column justify-content-between mt-5'>

            <h3 className='w-100 text-center d-flex mb-5'>A advogada Luana Mattos é especialista em direito previdenciário e pode
              ajudar você a garantir seus direitos com relação ao INSS. Agende uma
              consulta agora!</h3>
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
        </div>
      </div>

      {/* Footer */}
      <footer
        className=" p-4 m-0"
        ref={contatoRef}
        id='contatoRef'
        style={{
          background: '#101010',
          color: '#fff',
        }}
      >

        <div className='row d-flex'>
          <div className='col-6 text-center'>
            <img
              src={placa}
              alt="Placa"
              style={{
                width: '150px',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Ícones e informações à direita */}
          <div className="col-6 text-center m-0">
            <div className="mb-2">
              <i className="fab fa-whatsapp fa-lg me-3"></i>
              <span>(49) 99908-9980</span>
            </div>
            <div className="mb-2">
              <i className="fab fa-instagram fa-lg me-3"></i>
              <span>@luanamattosadvogada</span>
            </div>
            <div>
              <i className="fas fa-envelope fa-lg me-3"></i>
              <span>luanamattos.adv@hotmail.com</span>
            </div>
          </div>
        </div>
        <div className='row text-center'>

        <p><strong>Site desenvolvido por Pedro Henrique Fagundes <br />   <i className="fab fa-instagram fa-lg me-3"></i>
              <span>@pedrofagunndes</span> </strong></p>
        </div>
        {/* Imagem à esquerda */}
     

      </footer>
    </>
  );
}

export default App;
