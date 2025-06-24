import React from 'react';

interface QuestionItemProps {
  question: string;
  onClick?: () => void;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ question, onClick }) => {
  return (
    <button
      className="box-border gap-2.5 self-stretch rounded text-[rgba(121,121,121,1)] text-sm font-normal leading-[22.4px] cursor-pointer m-0 px-2 py-1.5 max-sm:text-[13px] max-sm:leading-[18px] max-sm:px-1.5 max-sm:py-1 hover:bg-[rgba(30,33,36,0.5)] transition-colors text-left w-full"
      onClick={onClick}
      type="button"
    >
      {question}
    </button>
  );
};
