import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserShield, faBalanceScale, faHandshake, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Revisão de Benefícios do INSS',
    
    description: 'Análise detalhada para garantir que você receba todos os valores devidos.',
    icon: faBriefcase,
  },
  {
    title: 'Apoio em Aposentadorias',
    description: 'Por idade, rural, híbrida, especial, pessoa com deficiência, e professor.',
    icon: faUserShield,
  },
  {
    title: 'Outros Benefícios Previdenciários',
    description: 'Salário-maternidade, auxílio-doença, pensão por morte, e auxílio-acidente.',
    icon: faBalanceScale,
  },
  {
    title: 'Benefícios Assistenciais (BPC/LOAS)',
    description: 'Garantimos o acesso a benefícios assistenciais para quem precisa.',
    icon: faHandshake,
  },
  {
    title: 'Defesa dos Direitos',
    description: 'Estratégia personalizada para evitar prejuízos financeiros e garantir prazos.',
    icon: faClock,
  },
  {
    title: 'Atendimento Humanizado',
    description: 'Serviços focados em resultados, com acolhimento e transparência.',
    icon: faHeart,
  },
];

const Services = () => {
  return (
 
      
      <div className="row container g-4">
        {services.map((service, index) => (
          <div className="col-md-4 p-5" key={index}>
            <div className="card h-100 text-center shadow-sm ">
              <div className="card-body mb-4 ">
                <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3 text-dark" />
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default Services;
