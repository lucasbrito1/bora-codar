import { ChangeEvent, useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import changeArrow from "../assets/changeArrow.svg";

const Input = () => {
  const [selectedCoin1, setSelectedCoin1] = useState<string>("USD");
  const [selectedCoin2, setSelectedCoin2] = useState<string>("USD");
  const [coins, setCoins] = useState(0);

  const apiUrl = import.meta.env.VITE_API;

  const getCoin = async (apiUrl: any) => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    const coinUrl = `${apiUrl}${selectedCoin1}`;
    getCoin(coinUrl);
  }, [selectedCoin1, selectedCoin2]);

  const handleCoin1 = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin1(e.target.value);
  };

  const handleCoin2 = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin2(e.target.value);
  };

  console.log(coins);

  return (
    <>
      <div className="border-2 border-[#94A3B8] focus-within:border-[#7C3AED] rounded-lg w-[18.25rem] h-14 pl-4 flex justify-between items-center relative">
        <input
          type="text"
          className="h-6 w-44 outline-none border-r border-[#94A3B8]"
        />
        <div className="border-r border-[#94A3B8]" />
        <select
          name=""
          id=""
          value={selectedCoin1}
          onChange={handleCoin1}
          className="appearance-none w-[100px] p-3 h-[52px] rounded-r-lg outline-none focus:bg-[#EDE9FE]"
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
        </select>
        <img src={arrow} alt="" className="absolute right-0 mr-6" />
      </div>
      <img src={changeArrow} alt="" />
      <div className="border-2 border-[#94A3B8] focus-within:border-[#7C3AED] rounded-lg w-[18.25rem] h-14 pl-4 flex justify-between items-center relative">
        <input
          type="text"
          className="h-6 w-44 outline-none border-r border-[#94A3B8]"
        />
        <div className="border-r border-[#94A3B8]" />
        <select
          name=""
          id=""
          value={selectedCoin2}
          onChange={handleCoin2}
          className="appearance-none w-[100px] p-3 h-[52px] rounded-r-lg outline-none focus:bg-[#EDE9FE]"
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
        </select>
        <img src={arrow} alt="" className="absolute right-0 mr-6" />
      </div>
    </>
  );
};

export default Input;
