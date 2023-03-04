import React from 'react';
import './App.scss';
import { IoAirplane } from 'react-icons/io5';
import QrCode from './assets/qr-code.png';

function App() {
  return (
    <div className="contained">
      <div className="text1">
        <p>Cartão de embarque</p>
      </div>

      <div className="voo-contained">
        <div className="flight">
          <div className="flight-number">
            <p className="voo-title">Voo</p>
            <p className="voo-number">AZU2501</p>
          </div>
          <div className="flight-date">
            <p className="date-title">Data</p>
            <p className="date">25/01/2023</p>
          </div>
        </div>
        <div className="locations">
          <div className="departure">
            <p className="departure-name">São Paulo, Brasil</p>
            <p className="departure-icall">GRU</p>
            <p className="departure-time">15:20</p>
          </div>
          <div className="plane">
            <IoAirplane />
          </div>
          <div className="arrival">
            <p className="arrival-name">São Francisco, EUA</p>
            <p className="arrival-icall">SFO</p>
            <p className="arrival-time">16:43</p>
          </div>
        </div>
      </div>
      <div className="passenger">
        <div className="passenger-info">
          <p className="passenger-title">Passageiro</p>
          <p className="passenger-name">Lucas Brito</p>
        </div>
        <div className="seat">
          <p className="seat-title">Assento</p>
          <p className="seat-name">28A</p>
        </div>
      </div>
      <div className="boarding">
        <div className="container">
          <div className="boarding-info">
            <div className="boarding-time">
              <p className="embarque">Embarque</p>
              <p className="time">14:45</p>
            </div>
            <div className="terminal">
              <p className="terminal-title">Terminal</p>
              <p className="terminal-number">2</p>
            </div>
            <div className="gate">
              <p className="gate-title">Portão</p>
              <p className="gate-number">15</p>
            </div>
          </div>
          <div className="qr-code">
            <img src={QrCode} alt="" />
            <p className="qr-code-info">Grupo de embarque: 3</p>
          </div>
        </div>
        <div className="atencao">
          <p>
            <span className="atencao-title">Atenção: </span>
            o portão fecha 15h05
          </p>
        </div>
      </div>
      <div className="text2">
        <p>Qualquer problema procure o balcão de atendimento da sua companhia aérea</p>
      </div>
    </div>
  );
}

export default App;
