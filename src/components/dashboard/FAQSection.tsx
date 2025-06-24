import React, { useState } from 'react';

interface FAQItem {
  id: string;
  company: string;
  icon: string;
  description: string;
  tags: string[];
}

interface FAQSectionProps {
  onFAQClick?: (item: FAQItem) => void;
}

const faqItems: FAQItem[] = [
  {
    id: 'tesla',
    company: '테슬라',
    icon: 'https://placehold.co/16x16/e31e24/e31e24',
    description: '테슬라의 현재 주가 및 일간 변동률을 알려줘!',
    tags: ['#현재 주가', '#일간 변동률']
  },
  {
    id: 'palantir',
    company: '팔란티어',
    icon: 'https://placehold.co/16x16/0052cc/0052cc',
    description: '팔란티어의 애널리스트 의견 및 목표주가가 어떻게 되?',
    tags: ['#애널리스트 목표주가']
  },
  {
    id: 'nvidia',
    company: '엔비디아',
    icon: 'https://placehold.co/16x16/76b900/76b900',
    description: '엔비디아의 1년 수익률을 알려줘!',
    tags: ['#1년 수익률']
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onFAQClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : faqItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < faqItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="box-border flex flex-col items-start gap-2.5 self-stretch relative m-0 p-0">
      <h2 className="box-border text-white text-lg font-bold leading-[28.8px] gap-2.5 self-stretch m-0 p-0 max-sm:text-base max-sm:leading-6">
        많이하는 질문
      </h2>
      <div className="box-border flex w-[776px] items-center gap-4 relative m-0 p-0 max-md:flex-col max-md:w-full">
        {faqItems.map((item, index) => (
          <article
            key={item.id}
            className="box-border flex h-40 flex-col items-start gap-2 flex-[1_0_0] bg-[#101317] m-0 p-4 rounded-lg max-md:w-full max-md:h-auto cursor-pointer hover:bg-[rgba(30,33,36,0.5)] transition-colors"
            onClick={() => onFAQClick?.(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onFAQClick?.(item);
              }
            }}
            aria-label={`${item.company}에 대한 질문: ${item.description}`}
          >
            <div className="box-border flex items-center gap-2 m-0 p-0">
              <div className="box-border flex w-4 h-4 justify-center items-center m-0 p-0 rounded-[41.684px]">
                <img
                  src={item.icon}
                  alt={item.company}
                  className="box-border w-4 h-4 m-0 p-0 rounded-[50%]"
                />
              </div>
              <h3 className="box-border text-white text-sm font-normal leading-[22.4px] m-0 p-0">
                {item.company}
              </h3>
            </div>
            <p className="box-border flex-[1_0_0] self-stretch text-white text-sm font-normal leading-[22.4px] m-0 p-0">
              {item.description}
            </p>
            <div className="box-border flex justify-center items-center gap-1 rounded m-0 p-0">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="box-border text-[rgba(110,113,115,1)] text-xs font-normal leading-[16.8px] m-0 p-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="box-border absolute flex justify-between items-center pointer-events-none m-0 p-0 top-2/4 -inset-x-10 max-md:hidden">
        <button
          type="button"
          onClick={handlePrevious}
          className="box-border w-6 h-6 cursor-pointer m-0 p-0 pointer-events-auto hover:opacity-80 transition-opacity"
          aria-label="이전 질문"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-left\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M6 11L1 6L6 1\" stroke=\"#6E7173\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="box-border w-6 h-6 cursor-pointer m-0 p-0 pointer-events-auto hover:opacity-80 transition-opacity"
          aria-label="다음 질문"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-right\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M1 1L6 6L1 11\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
      </div>
    </section>
  );
};
