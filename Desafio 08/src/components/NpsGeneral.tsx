import smile from '../assets/smile.png';

const NpsGeneral = () => {
  return (
    <div className='bg-card w-[18.5rem] h-[23.68rem] rounded-2xl shadow-cardShadow py-8 px-12 flex flex-col items-center justify-between'>
      <div>
        <p className='text-white text-[1.5rem] font-semibold'>
          NPS geral
        </p>
      </div>
      <div className='flex items-center flex-col gap-4'>
        <img src={smile} alt="Smile" />
        <p className='text-[#81FBB8] text-[1.5rem] font-semibold'>
          Excelente!
        </p>
      </div>
      <p className='text-white text-[0.87rem]'>
        <span>NPS Score<span className='ml-2'>75</span></span>
      </p>
    </div>
  );
};

export default NpsGeneral;