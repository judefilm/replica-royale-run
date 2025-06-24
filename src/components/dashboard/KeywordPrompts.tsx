import React, { useState } from 'react';

interface KeywordPromptsProps {
  onKeywordClick?: (keyword: string) => void;
}

const keywords = [
  '#현재 주가',
  '#실적',
  '#1년 수익률',
  '#P/E ��율',
  '#분기별 매출·순이익',
  '#배당 정책',
  '#기술적 지표(RSI·MACD)',
  '#부채비율(D/E)',
  '#애널리스트 목표주가',
  '#주요 뉴스·이벤트 영향',
  '#배당 정책'
];

export const KeywordPrompts: React.FC<KeywordPromptsProps> = ({ onKeywordClick }) => {
  const [selectedKeyword, setSelectedKeyword] = useState('#실적');

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword);
    onKeywordClick?.(keyword);
  };

  return (
    <aside className="box-border flex w-[300px] flex-col items-start gap-4 self-stretch bg-[#101317] m-0 px-6 py-4 rounded-lg max-md:w-full max-sm:px-4 max-sm:py-3">
      <h3 className="box-border text-white text-base font-normal leading-[25.6px] m-0 p-0 max-sm:text-sm max-sm:leading-5">
        질문 프롬프트 생성 키워드
      </h3>
      <div className="box-border flex flex-col items-start gap-2.5 self-stretch m-0 p-0">
        {keywords.map((keyword, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleKeywordClick(keyword)}
            className={`box-border text-sm font-normal leading-[22.4px] gap-2.5 rounded cursor-pointer bg-[rgba(30,33,36,1)] m-0 px-3 py-1.5 transition-colors hover:bg-[rgba(40,43,46,1)] ${
              selectedKeyword === keyword 
                ? 'text-white font-bold' 
                : 'text-[rgba(110,113,115,1)]'
            }`}
            aria-pressed={selectedKeyword === keyword}
          >
            {keyword}
          </button>
        ))}
      </div>
    </aside>
  );
};
