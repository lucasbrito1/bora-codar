import Input from "./Input";
import changeArrow from '../assets/changeArrow.svg';

const Converter = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-xl">Conversor de moedas</p>
      <div className="flex gap-5">
        <Input />
        <img src={changeArrow} alt="" />
        <Input />
      </div>
    </div>
  );
};

export default Converter;