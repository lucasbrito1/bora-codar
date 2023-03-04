import React from "react";

interface Props {
  salesWeek: number;
  weekTitle: string;
}

export const SalesWeekGraph: React.FC<Props> = ({ salesWeek, weekTitle }) => {

  const barSize = (salesWeek / 10) * 100;
  const progress = {
    height: `${barSize}%`
  }

  return (
    <>
      <div className="flex h-full flex-col items-center justify-end">
        <div
          className='bg-blueGradient w-5 rounded-full z-[1]'
          role='progressbar'
          aria-valuenow={salesWeek}
          style={progress}
        />
        <p>{weekTitle}</p>
      </div>
      <div className="bg-[#4A4556] h-1 top-[50%] w-full absolute -translate-y-5" />
    </>
  );
};