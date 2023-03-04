import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GradientSalesSVG } from './GradientProgressBar';

const Sales = () => {

  const percentage = 70;
  const idCSS = 'SalesProgressDashboard';

  return (
    <div className="bg-card w-[21.93rem] h-[23.68rem] rounded-2xl shadow-cardShadow py-8 px-12 flex flex-col items-center justify-between">
      <p className="text-white font-semibold text-2xl">
        Vendas fechadas
      </p>
      <div className='w-48 h-48'>
        <GradientSalesSVG />
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={14}
          styles={buildStyles({
            pathColor: `url(#${idCSS})`,
            textColor: 'white',
            trailColor: '#4A4556',
          })}
        >
          <div className='text-white'>
            <p className='text-4xl font-bold'>{percentage}%</p>
            <span className='text-base'>alcançada</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className='flex items-center gap-5 text-sm text-white'>
        <div className='flex items-center gap-1'>
          <div className='bg-circle w-4 h-4 rounded-full' />
          <p>Esperado<span className='ml-2'>100</span></p>
        </div>
        <div className='flex items-center gap-1'>
          <div className='bg-violetGradient w-4 h-4 rounded-full' />
          <p>Alcançado<span className='ml-2'>{percentage}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Sales;