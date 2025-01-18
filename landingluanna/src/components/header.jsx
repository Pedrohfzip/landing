import React from 'react';
import '../App.css';
import './style.css';
import logo from '../../public/headerback.png'; // Caminho para a imagem de fundo alternativa

export default function Header({ scrollTo }) {
  // Verifica o tamanho da janela para decidir o que renderizar
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="header-container p-0 m-0">
        {/* Renderiza a estrutura <img> se estiver em tela menor que 700px */}
        {isMobile && (
          <img
            src={logo}
            alt="Background"
            className='m-0'
            style={{
              zIndex: -1,
              height: '100%', // Mantém a proporção
            }}
          />
        )}

        <div className="header-content">
          <a
            href="https://wa.me/5549999089980"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none logo-animation me-1"
          >
            <i
              className="fab fa-whatsapp fa-2x me-5"
              style={{ color: 'black' }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/luanamattosadvogada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none logo-animation ms-1"
          >
            <i
              className="fab fa-instagram fa-2x"
              style={{ color: 'black' }}
            ></i>
          </a>
        </div>
      </div>

      {/* Nova div com os textos */}
      <div className="header-text-container text-white m-0" style={{   background: "#153C41",}}>
        <p className="header-text text-white">
          Especialista em Direito Previdenciário, pronta para garantir que seus
          direitos sejam respeitados e seus benefícios pagos corretamente.
        </p>
        <p className="header-text text-white">
          Com mais de 6 anos de experiência em direito previdenciário, a
          advogada Luana Mattos já ajudou centenas de pessoas a conquistar o
          benefício que é delas por direito, com um atendimento especializado e
          humanizado.
        </p>
      </div>
    </>
  );
}
