import React, {useState, ChangeEvent, FormEvent} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BLOCOS } from "../Utils";
import ilustra01 from "../../assets/ilustra-01.png";
import ilustra02 from "../../assets/ilustra-02.png";
import "./Hero.scss";


interface resultadoProps {
  resultado: any;
  setResultado: (filterBlocos: any) => void;
}

const Hero = ({ resultado, setResultado } :resultadoProps) => {

  const listCitys = BLOCOS.map(bloco => bloco.city);
  const citys = listCitys.filter((listCitys, index, array) => {
    return array.indexOf(listCitys) === index;
  });

  const [blocoName, setBlocoName] = useState('');
  const [city, setCity] = useState('');

  const handleBlocoName = (e: ChangeEvent<HTMLInputElement>) => {
    setBlocoName(e.target.value);
  };

  const handleCityName = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const filterBlocos = BLOCOS.filter((bloco) => {
        const searchBlocoName = blocoName.toLowerCase();
        const name = bloco.titulo.toLowerCase();

        if (searchBlocoName) {
          return name.includes(searchBlocoName);
        } else if (city) {
          return bloco.city.includes(city);
        } else {
          return resultado;
        }
      });
      setResultado(filterBlocos);
  };

  return (
    <div className="main-hero">
      <img src={ilustra01} alt="" className="ilustra01" />
      <img src={ilustra02} alt="" className="ilustra02" />
      <div className="hero">
        <p className="find">FIND YOUR BLOCK</p>
        <p className="encontre">
          Encontre os <span className="melhores">melhores blocos</span> de
          carnaval de 2023
        </p>
        <form onSubmit={handleSubmit}>
        <div className="main-hero-search">
          <div className="hero-search">
            <div className="input-container">
              <input
                type="text"
                className="search-name"
                placeholder="Pesquise por nome"
                onChange={handleBlocoName}
              />
              <AiOutlineSearch className="icon-search" />
            </div>
            <div className="select-container">
              <select
                defaultValue="opcao1"
                className="select-city"
                onChange={handleCityName}
              >
                <option value="">
                  Todas as cidades
                </option>
                {citys.map((city, index) => (
                <option value={city} key={index}>{city}</option>
                ))}
              </select>
              <IoLocationOutline className="icon-location" />
            </div>
            <button className="button-search" type='submit'>BUSCAR AGORA</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
