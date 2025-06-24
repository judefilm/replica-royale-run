
import React, { useState } from 'react';
import { StockCard } from './StockCard';
import { KeywordPrompts } from './KeywordPrompts';

interface Stock {
  id: string;
  name: string;
  ticker: string;
  priceChange: string;
  price: string;
  imageUrl: string;
}

interface SymbolListProps {
  onStockClick?: (stock: Stock) => void;
  onKeywordClick?: (keyword: string) => void;
}

const stocks: Stock[] = [
  {
    id: 'tsla',
    name: '테슬라',
    ticker: 'TSLA',
    priceChange: '+2.38%',
    price: '124.28달러',
    imageUrl: 'https://placehold.co/38x38/e31e24/e31e24'
  },
  {
    id: 'pltr',
    name: '팔란티어',
    ticker: 'PLTR',
    priceChange: '+6.95%',
    price: '124.28달러',
    imageUrl: 'https://placehold.co/38x38/0052cc/0052cc'
  },
  {
    id: 'nvda',
    name: '엔비디아',
    ticker: 'NVDA',
    priceChange: '+2.59%',
    price: '114.50 달러',
    imageUrl: 'https://placehold.co/38x38/76b900/76b900'
  },
  {
    id: 'googl',
    name: '알파벳 A',
    ticker: 'GOOGL',
    priceChange: '+1.69%',
    price: '164.03달러',
    imageUrl: 'https://placehold.co/38x38/4285f4/4285f4'
  },
  {
    id: 'amzn',
    name: '아마존',
    ticker: 'AMZN',
    priceChange: '-0.12%',
    price: '189.98 달러',
    imageUrl: 'https://placehold.co/38x38/ff9900/ff9900'
  },
  {
    id: 'adbe',
    name: '어도비',
    ticker: 'ADBE',
    priceChange: '-1.02%',
    price: '373.00달러',
    imageUrl: 'https://placehold.co/38x38/ff0000/ff0000'
  },
  {
    id: 'avgo',
    name: '브로드컴',
    ticker: 'AVGO',
    priceChange: '-1.14%',
    price: '246.85달러',
    imageUrl: 'https://placehold.co/38x38/ca1a1a/ca1a1a'
  },
  {
    id: 'pg',
    name: 'P&G',
    ticker: 'PG',
    priceChange: '-0.41%',
    price: '158.40달러',
    imageUrl: 'https://placehold.co/38x38/003da5/003da5'
  },
  {
    id: 'amd',
    name: 'AMD',
    ticker: 'AMD',
    priceChange: '+1.58%',
    price: '126.66달러',
    imageUrl: 'https://placehold.co/38x38/ed1c24/ed1c24'
  },
  {
    id: 'xom',
    name: '엑슨 모빌',
    ticker: 'XOM',
    priceChange: '+2.84%',
    price: '118.02달러',
    imageUrl: 'https://placehold.co/38x38/ff1e2d/ff1e2d'
  }
];

export const SymbolList: React.FC<SymbolListProps> = ({ onStockClick, onKeywordClick }) => {
  const [activeTab, setActiveTab] = useState<'interests' | 'popular'>('interests');
  const [activeCategory, setActiveCategory] = useState<'stock' | 'etf' | 'economic'>('stock');

  return (
    <section className="box-border flex flex-col items-start gap-5 self-stretch m-0 p-0">
      <div className="box-border flex flex-col items-start gap-4 self-stretch m-0 p-0">
        <div className="box-border flex items-end gap-2.5 self-stretch m-0 p-0">
          <h2 className="box-border text-white text-lg font-bold leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6">
            심볼
          </h2>
          <div className="box-border text-[rgba(110,113,115,1)] text-xs font-normal leading-[16.8px] gap-2.5 m-0 pb-[3px] p-0">
            오늘 11:20 기준
          </div>
        </div>
        <div className="box-border flex items-start self-stretch m-0 p-0 border-b-[rgba(36,39,42,1)] border-b border-solid">
          <button
            type="button"
            onClick={() => setActiveTab('interests')}
            className={`box-border text-sm font-bold leading-[22.4px] gap-2.5 cursor-pointer m-0 pt-0 pb-3.5 px-4 border-b-2 transition-colors ${
              activeTab === 'interests' 
                ? 'text-white border-white' 
                : 'text-[rgba(110,113,115,1)] border-transparent hover:text-white'
            }`}
            aria-pressed={activeTab === 'interests'}
          >
            내 관심 심볼
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('popular')}
            className={`box-border text-sm font-normal leading-[22.4px] gap-2.5 cursor-pointer m-0 pt-0 pb-3.5 px-4 border-b-2 transition-colors ${
              activeTab === 'popular' 
                ? 'text-white border-white' 
                : 'text-[rgba(110,113,115,1)] border-transparent hover:text-white'
            }`}
            aria-pressed={activeTab === 'popular'}
          >
            질문이 많은 심볼
          </button>
        </div>
        <div className="box-border flex items-center gap-1.5 self-stretch m-0 p-0" role="tablist">
          <button
            type="button"
            onClick={() => setActiveCategory('stock')}
            className={`box-border text-[13px] font-normal leading-[18.2px] gap-2.5 cursor-pointer m-0 px-3.5 py-1.5 rounded-[99px] transition-colors ${
              activeCategory === 'stock' 
                ? 'text-white bg-[rgba(30,33,36,1)]' 
                : 'text-[rgba(110,113,115,1)] hover:text-white hover:bg-[rgba(30,33,36,0.5)]'
            }`}
            role="tab"
            aria-selected={activeCategory === 'stock'}
          >
            주식
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('etf')}
            className={`box-border text-[13px] font-normal leading-[18.2px] gap-2.5 cursor-pointer m-0 px-3.5 py-1.5 rounded-[99px] transition-colors ${
              activeCategory === 'etf' 
                ? 'text-white bg-[rgba(30,33,36,1)]' 
                : 'text-[rgba(110,113,115,1)] hover:text-white hover:bg-[rgba(30,33,36,0.5)]'
            }`}
            role="tab"
            aria-selected={activeCategory === 'etf'}
          >
            ETF
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('economic')}
            className={`box-border text-[13px] font-normal leading-[18.2px] gap-2.5 cursor-pointer m-0 px-3.5 py-1.5 rounded-[99px] transition-colors ${
              activeCategory === 'economic' 
                ? 'text-white bg-[rgba(30,33,36,1)]' 
                : 'text-[rgba(110,113,115,1)] hover:text-white hover:bg-[rgba(30,33,36,0.5)]'
            }`}
            role="tab"
            aria-selected={activeCategory === 'economic'}
          >
            경제지표
          </button>
        </div>
      </div>
      <div className="box-border flex items-start gap-6 self-stretch m-0 p-0 max-md:flex-col">
        <div className="box-border flex flex-col items-start flex-[1_0_0] m-0 p-0">
          {stocks.map((stock) => (
            <StockCard
              key={stock.id}
              name={stock.name}
              ticker={stock.ticker}
              priceChange={stock.priceChange}
              price={stock.price}
              imageUrl={stock.imageUrl}
              onClick={() => onStockClick?.(stock)}
            />
          ))}
        </div>
        <div className="box-border flex w-[300px] shrink-0 m-0 p-0 max-md:w-full">
          <KeywordPrompts onKeywordClick={onKeywordClick} />
        </div>
      </div>
    </section>
  );
};
