import Input from "./Input";

const Converter = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-xl">Conversor de moedas</p>
      <div className="flex gap-5">
        <Input />
      </div>
    </div>
  );
};

export default Converter;
