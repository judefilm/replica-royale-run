import React from 'react';

interface StockCardProps {
  name: string;
  ticker: string;
  priceChange: string;
  price: string;
  imageUrl: string;
  onClick?: () => void;
}

export const StockCard: React.FC<StockCardProps> = ({ 
  name, 
  ticker, 
  priceChange, 
  price, 
  imageUrl, 
  onClick 
}) => {
  const isPositive = priceChange.startsWith('+');
  const isNegative = priceChange.startsWith('-');
  
  return (
    <button
      className="box-border flex items-center gap-4 self-stretch cursor-pointer m-0 px-2 py-3 rounded-lg max-sm:gap-3 max-sm:p-2 hover:bg-[rgba(30,33,36,0.5)] transition-colors w-full text-left"
      onClick={onClick}
      type="button"
    >
      <div className="box-border flex w-[38px] h-[38px] justify-center items-center m-0 p-0 rounded-[99px] max-sm:w-8 max-sm:h-8">
        <img
          src={imageUrl}
          alt={name}
          className="box-border w-[38px] h-[38px] m-0 p-0 rounded-[50%] max-sm:w-8 max-sm:h-8"
        />
      </div>
      <div className="box-border flex flex-col items-start gap-0.5 flex-[1_0_0] m-0 p-0">
        <div className="box-border text-white text-sm font-normal leading-[22.4px] m-0 p-0">
          {name}
        </div>
        <div className="box-border text-white text-xs font-normal leading-[16.8px] opacity-40 m-0 p-0">
          {ticker}
        </div>
      </div>
      <div className="box-border flex flex-col justify-center items-end gap-0.5 m-0 p-0">
        <div className={`box-border text-sm font-normal leading-[22.4px] m-0 p-0 ${
          isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-white'
        }`}>
          {priceChange}
        </div>
        <div className="box-border text-white text-xs font-normal leading-[16.8px] opacity-40 m-0 p-0">
          {price}
        </div>
      </div>
    </button>
  );
};
