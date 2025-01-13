import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/services';
import Testimonials from './components/reviews';
import fotoLuana from '../public/fotoLuana.jpg'
import placa from '../public/placa.jpg'
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
      {/* Primeira seção */}
      <div
        className="container logo-animation h-100 w-100"
        style={{
          width: '100vw',
          height: '100vh',
        }}
        id="section1"
        ref={section1Ref}
      >
        <Header />
      </div>

      {/* Botão "Veja mais" */}
   

      {/* Segunda seção */}
      <div
        id="section2"
        ref={section2Ref}
        className="container logo-animation h-100 w-100"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
           <div className="row text-center mt-4">
        <h4
          className="logo-animation cursor"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(section2Ref)} // Chama a função com a referência da próxima seção
        >
          Serviços
          <i
            className="fas fa-chevron-down mt-5 logo-animation"
            style={{
              marginLeft: '10px',
              fontSize: '1.5rem',
              color: '#B56E3C',
            }}
          ></i>
        </h4>
      </div>
        <Services />
      </div>
      <div
        id="section3"
        // ref={section2Ref}
        className="container logo-animation h-100 w-100 mt-5"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Testimonials />
      </div>
      <div
  id="section4"
  className="container logo-animation h-100 w-100 mt-5 text-center pt-2 pb-2"
  style={{
    background: "#153C41",
    color: "#fff",
  }}
>
  <div className="row align-items-center">
    {/* Coluna da imagem */}
    <div className="col-md-6">
      <img
        src={placa}
        alt="Estátua"
        className="m-0 p-0 logo-animation"
        style={{
          width: "100%",
          boxShadow: "7px 3px 10px 2px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
        }}
      />
    </div>

    {/* Coluna do texto */}
    <div className="col-md-6 text-start">
      <h2 className="mb-4">Benefícios de Contratar Luana Mattos</h2>
      <ul
        className="list-unstyled"
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        <li className="mb-3">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "#FFD700",
            }}
          >
            ● Especialização Reconhecida:
          </span>
          <br />
          <span>Anos de experiência no Direito Previdenciário, focada em garantir benefícios e direitos previdenciários com eficiência.</span>
        </li>
        <li className="mb-3">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "#FFD700",
            }}
          >
            ● Transparência em Cada Etapa:
          </span>
          <br />
          <span>Você recebe explicações claras sobre o andamento do seu caso, sem surpresas ou dúvidas.</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "#FFD700",
            }}
          >
            ● Consultoria Inicial sem Compromisso:
          </span>
          <br />
          <span>Avaliação prévia para você entender suas possibilidades antes de tomar qualquer decisão.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

      <div
       id="section4"
        className="container logo-animation h-100 w-100 mt-5 text-center mt-5"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <h4>Não deixe seu direito ser ignorado! Agende sua consulta agora mesmo e
          garanta a tranquilidade que você merece.</h4>
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
      </div>
      {/* Seção do iframe */}
      
    </>
  );
}

export default App;
