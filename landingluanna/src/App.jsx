import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/services';
import Testimonials from './components/reviews';
import fotoLuana from '../public/fotoLuana.jpg';
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
        className="logo-animation h-100 w-100 mt-5 "
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
          <h4
          className="logo-animation cursor mb-5 text-center"
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
            zIndex: 1,
          }}
        />
        <Testimonials />
      </div>

      <div
        id="section4"
        className="logo-animation h-100 w-100 text-center pt-2 pb-2"
        style={{
          background: '#153C41',
          color: '#fff',
        }}
      >
        <div className="row">
          {/* Coluna da imagem */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={placa}
              alt="Placa"
              className="m-0 p-0 logo-animation"
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
          <button className="btn btn-lg btn-warning text-uppercase fw-bold" style={{ padding: "15px 30px", fontSize: "1.5rem", borderRadius: "5px", backgroundColor: "#FFC107", color: "#153C41", border: "none", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", cursor: "pointer" }} onClick={() => alert("Redirecionando para agendamento...")}>
            Agende seu Horário AGORA!
          </button>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="d-flex justify-content-between align-items-center p-4"
        ref={contatoRef}
        id='contatoRef'
        style={{
          background: '#101010',
          color: '#fff',
        }}
      >
        {/* Imagem à esquerda */}
        <div>
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
        <div className="text-center">
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
            <span>contato@luanamattos.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
