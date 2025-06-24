import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { SearchBox } from '@/components/dashboard/SearchBox';
import { FAQSection } from '@/components/dashboard/FAQSection';
import { SymbolList } from '@/components/dashboard/SymbolList';
export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };
  const handleWebSearch = () => {
    console.log('Performing web search');
  };
  const handleNewQuestion = () => {
    console.log('Starting new question');
  };
  const handleManageInterests = () => {
    console.log('Managing interests');
  };
  const handleMDrive = () => {
    console.log('Accessing M Drive');
  };
  const handlePastQuestions = () => {
    console.log('Viewing past questions');
  };
  const handleQuestionClick = (question: string) => {
    console.log('Selected question:', question);
    setSearchQuery(question);
  };
  const handleFAQClick = (item: any) => {
    console.log('Selected FAQ:', item);
    setSearchQuery(item.description);
  };
  const handleStockClick = (stock: any) => {
    console.log('Selected stock:', stock);
  };
  const handleKeywordClick = (keyword: string) => {
    console.log('Selected keyword:', keyword);
  };
  return <div className="box-border flex w-screen h-screen bg-[#080A0B] m-0 p-0 max-md:flex-col max-md:h-auto">
      <Sidebar onNewQuestion={handleNewQuestion} onManageInterests={handleManageInterests} onMDrive={handleMDrive} onPastQuestions={handlePastQuestions} onQuestionClick={handleQuestionClick} />
      
      <main className="box-border flex flex-col items-center gap-10 flex-[1_0_0] self-stretch bg-[#080A0B] m-0 pt-10 pb-10 px-10 rounded-lg max-md:p-5 max-sm:gap-6 max-sm:p-4">
        <div className="box-border flex w-[776px] flex-col items-start gap-10 m-0 p-0 max-md:w-full">
          <SearchBox initialQuery={searchQuery || "팔란티어 실적 어떻게 나왔어?"} onSearch={handleSearch} onWebSearch={handleWebSearch} />
          
          <FAQSection onFAQClick={handleFAQClick} />
          
          <SymbolList onStockClick={handleStockClick} onKeywordClick={handleKeywordClick} />
        </div>
      </main>

      <aside className="box-border flex w-80 flex-col items-center justify-center shrink-0 m-0 px-6 py-10 max-md:w-full max-md:p-5 max-sm:gap-6 max-sm:p-4 bg-[#101317]">
        <span className="text-white text-lg font-normal leading-[28.8px] max-sm:text-base max-sm:leading-6">
          탐색 요소 검토 중
        </span>
      </aside>
    </div>;
}