import { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/services';
import Testimonials from './components/reviews';
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
      <div className="row text-center mt-4">
        <h4
          className="logo-animation cursor"
          style={{
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(section2Ref)} // Chama a função com a referência da próxima seção
        >
          Benefícios de Contratar Luana Mattos
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
        <Services />
      </div>
      <div
        id="section2"
        ref={section2Ref}
        className="container logo-animation h-100 w-100 mt-5"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Testimonials />
      </div>
        <div
        id="section2"
        ref={section2Ref}
        className="container text-center logo-animation h-100 w-100 mt-5 justify-content-center d-flex"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
         
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.1709832101883!2d-51.2238743!3d-27.4015947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e16555a497e367%3A0xddc47f209439654d!2sLuana%20Mattos%20-%20Advogada%20Previdenci%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1736664078513!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização de Luana Mattos"
        ></iframe>
       
      </div>

      {/* Seção do iframe */}
      
    </>
  );
}

export default App;
