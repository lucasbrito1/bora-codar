import React from 'react';
import {IoLocationOutline} from "react-icons/io5";
import './Content.scss';

interface resultadoProps {
  resultado: any;
}

const Content = ({ resultado } :resultadoProps) => {
  return(
    <div className='content-container'>
      <div className="title">
        <div className="title-text">
          <p>Blocos recomendados</p>
        </div>
        <div className="button-select">
          <div className="button-lista">
            <button>LISTA</button>
          </div>
          <div className="button-mapa">
            <button>MAPA</button>
          </div>
        </div>
      </div>
      <div className="grid-cards">
        {resultado.map((bloco: any) => (
        <div className="card" key={bloco.id}>
         <img src={bloco.img} alt="" />
          <div className="card-content">
            <div className="card-title">
              <p>{bloco.titulo}</p>
            </div>
            <div className="card-desc">
              <p>{bloco.desc}</p>
            </div>
            <div className="card-city">
              <IoLocationOutline className="card-city-icon" />
              <p>{bloco.city}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Content;