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

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]);

  return (
    <>
      <Header />

      <div className="row text-center m-0 p-0 mt-5">
        <h4
          className="logo-animation cursor mb-5"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(section2Ref)} // Chama a função com a referência da próxima seção
        >
          Serviços
          <i
            className="fas fa-chevron-down logo-animation"
            style={{
              marginLeft: '10px',
              fontSize: '1.5rem',
              color: '#B56E3C',
            }}
          ></i>
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
          <i
            className="fas fa-chevron-down logo-animation"
            style={{
              marginLeft: '10px',
              fontSize: '1.5rem',
              color: '#B56E3C',
            }}
          ></i>
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
              <li className="mb-3">
                <strong>● Especialização Reconhecida:</strong>
                <br />
                Anos de experiência no Direito Previdenciário, focada em
                garantir benefícios e direitos previdenciários com eficiência.
              </li>
              <li className="mb-3">
                <strong>● Transparência em Cada Etapa:</strong>
                <br />
                Você recebe explicações claras sobre o andamento do seu caso,
                sem surpresas ou dúvidas.
              </li>
              <li>
                <strong>● Consultoria Inicial sem Compromisso:</strong>
                <br />
                Avaliação prévia para você entender suas possibilidades antes de
                tomar qualquer decisão.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="d-flex justify-content-between align-items-center p-4"
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
        <div className="text-end">
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
