import ArrowUp from '../assets/ArrowUp.svg';
import ArrowDown from '../assets/ArrowDown.svg';
import { SalesWeekGraph } from './SalesWeekGraph';
import { DATA } from "../utils/GraphData";

const SalesWeek = () => {
  return (
    <div className="bg-card w-[70rem] h-80 rounded-2xl shadow-cardShadow py-7 px-12">
      <p className="text-2xl font-semibold">Vendas por dia da semana</p>
      <div className='mt-[2rem] flex flex-row justify-between h-[11.6rem]'>
        <div className='flex flex-col gap-[2rem]'>
          <div>
            <p className='flex flex-row text-sm'>
              <img src={ArrowUp} alt="" className='mr-2' />
              Dia com mais vendas
            </p>
            <p className='text-2xl mt-2 font-medium'>quarta-feira</p>
          </div>
          <div>
            <p className='flex flex-row text-sm'>
              <img src={ArrowDown} alt="" className='mr-2' />
              Dia com menos vendas
            </p>
            <p className='text-2xl mt-2 font-medium'>domingo</p>
          </div>
        </div>
        <div className="h-[186px] w-[523px] flex items-end relative justify-between">
          {DATA.map(item => (
            <SalesWeekGraph
              key={item.id}
              salesWeek={item.salesWeek}
              weekTitle={item.weekTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesWeek;