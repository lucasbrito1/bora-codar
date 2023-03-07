import arrow from '../assets/arrow.svg';

const Input = () => {
  return (
    <div className="border-2 border-[#94A3B8] hover:border-[#7C3AED] rounded-lg w-[18.25rem] h-14 pl-4 flex justify-between items-center relative">
      <input type="text" className="h-6 w-44 outline-none border-r border-[#94A3B8]" />
      <select name="" id="" className="appearance-none w-[100px] p-3 h-[52px] rounded-r-lg outline-none focus:bg-[#EDE9FE]">
        <option value="">USD</option>
        <option value="">BRL</option>
      </select>
      <img src={arrow} alt="" className='absolute right-0 mr-6' />
    </div>
  );
};

export default Input;