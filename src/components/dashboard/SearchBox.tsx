import React, { useState } from 'react';

interface SearchBoxProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  onWebSearch?: () => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ 
  initialQuery = "팔란티어 실적 어떻게 나왔어?", 
  onSearch,
  onWebSearch 
}) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="box-border flex flex-col justify-center items-start gap-4 self-stretch bg-[#101317] m-0 px-6 py-4 rounded-2xl border-[1.5px] border-solid border-[#09D159] max-sm:px-4 max-sm:py-3"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="box-border text-[#09D159] text-lg font-bold leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6 bg-transparent border-none outline-none w-full placeholder-[#09D159]"
        placeholder="질문을 입력하세요..."
        aria-label="검색 질문 입력"
      />
      <div className="box-border flex justify-between items-center self-stretch m-0 p-0">
        <button
          type="button"
          onClick={onWebSearch}
          className="box-border flex justify-center items-center gap-1.5 cursor-pointer bg-[rgba(30,33,36,1)] m-0 px-3 py-2 rounded-[999px] hover:bg-[rgba(40,43,46,1)] transition-colors"
          aria-label="웹 검색"
        >
          <div className="box-border w-4 h-4 m-0 p-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"search-svg\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M10.285 10.3601L12.6004 12.6001M11.8537 6.62681C11.8537 9.51342 9.51367 11.8535 6.62706 11.8535C3.74045 11.8535 1.40039 9.51342 1.40039 6.62681C1.40039 3.7402 3.74045 1.40015 6.62706 1.40015C9.51367 1.40015 11.8537 3.7402 11.8537 6.62681Z\" stroke=\"#6E7173\" stroke-linecap=\"round\"></path> </svg>",
              }}
            />
          </div>
          <span className="box-border text-[rgba(159,160,161,1)] text-[13px] font-medium leading-[18.2px] m-0 p-0">
            웹검색
          </span>
        </button>
        <button
          type="submit"
          className="box-border flex justify-center items-center gap-1.5 cursor-pointer bg-[rgba(36,39,42,1)] m-0 p-3 rounded-[999px] hover:bg-[rgba(46,49,52,1)] transition-colors"
          aria-label="검색 실행"
        >
          <div className="box-border w-5 h-5 m-0 p-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-svg\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M5.42834 14.5L1 10.0717M1 10.0717L5.42834 5.64332M1 10.0717H11.6667C13.5076 10.0717 15 8.57927 15 6.73832V1.5\" stroke=\"#09D159\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
              }}
            />
          </div>
        </button>
      </div>
    </form>
  );
};
