import React, { useState } from 'react';
import { UserProfile } from './UserProfile';
import { QuestionItem } from './QuestionItem';

interface SidebarProps {
  onNewQuestion?: () => void;
  onManageInterests?: () => void;
  onMDrive?: () => void;
  onPastQuestions?: () => void;
  onQuestionClick?: (question: string) => void;
}

const todayQuestions = [
  '팔란티어의 1년 수익률',
  '애플 실적 분석',
  '딥시크의 엔비디아 장기 영향'
];

const yesterdayQuestions = [
  '스타게이트 프로젝트 수혜주',
  '최근 급등주 리스트',
  '유망한 종목',
  '브로드컴의 주가 급등 이유'
];

const lastWeekQuestions = [
  '트럼프 당선 수혜주',
  '민주당 낸시 펠로시 최근 매수 종목',
  '최근 기관 수급이 몰리는 종목',
  '최근 내부자 수급이 몰리는 종목',
  '애플 인텔리전스의 상용화 속도',
  '피지컬AI와 엔비디아',
  '양자컴퓨팅이 필수인 이유와 수혜주',
  '테슬라 옵티머스의 실적 기여'
];

export const Sidebar: React.FC<SidebarProps> = ({
  onNewQuestion,
  onManageInterests,
  onMDrive,
  onPastQuestions,
  onQuestionClick
}) => {
  const [isPastQuestionsExpanded, setIsPastQuestionsExpanded] = useState(true);

  return (
    <nav className="box-border flex w-80 flex-col items-start gap-10 shrink-0 bg-[#101317] m-0 px-6 py-10 max-md:w-full max-md:p-5 max-sm:gap-6 max-sm:p-4">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"272\" height=\"36\" viewBox=\"0 0 272 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logo\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 272px; height: 36px\"> <path d=\"M110.189 32.7439L114.257 35.922L138.978 4.35393L135.903 0.183139L110.189 32.7439Z\" fill=\"white\"></path> <path d=\"M161.715 32.7439L157.647 35.922L132.823 4.35393L135.898 0.183139L161.715 32.7439Z\" fill=\"white\"></path> <path d=\"M108.998 35.8152H114.16V15.9611L108.998 22.91V35.8152Z\" fill=\"white\"></path> <path d=\"M157.84 35.8152H163.002V15.9611L157.84 22.91V35.8152Z\" fill=\"white\"></path> <path d=\"M110.189 3.25586L114.257 0.0777712L138.978 31.6458L135.903 35.8166L110.189 3.25586Z\" fill=\"#6E7173\"></path> <path d=\"M161.715 3.25586L157.647 0.0777712L132.823 31.6458L135.898 35.8166L161.715 3.25586Z\" fill=\"#6E7173\"></path> <path d=\"M108.998 0.0778809H114.16V13.1816L108.998 19.3364V0.0778809Z\" fill=\"#6E7173\"></path> <path d=\"M157.84 0.0778809H163.002V13.1816L157.84 19.3364V0.0778809Z\" fill=\"#6E7173\"></path> </svg>",
          }}
        />
      </div>
      
      <div className="box-border flex flex-col items-start gap-7 flex-[1_0_0] self-stretch m-0 p-0">
        <button
          type="button"
          onClick={onNewQuestion}
          className="box-border flex items-center gap-2.5 self-stretch cursor-pointer m-0 p-0 hover:bg-[rgba(30,33,36,0.5)] rounded transition-colors w-full text-left"
          aria-label="새로운 질문 시작"
        >
          <div className="box-border w-6 h-6 m-0 p-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"edit-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.324 1.40705C12.7144 1.0165 13.3474 1.01623 13.738 1.40645L16.0914 3.75721C16.4823 4.14759 16.4825 4.78092 16.092 5.17163L6.13422 15.1349C5.99494 15.2743 5.81759 15.3694 5.62444 15.4083L1.19922 16.3L2.09247 11.88C2.13142 11.6872 2.22634 11.5103 2.36535 11.3712L12.324 1.40705Z\" stroke=\"white\" stroke-linejoin=\"round\"></path> </svg>",
              }}
            />
          </div>
          <span className="box-border flex-[1_0_0] text-white text-lg font-normal leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6">
            새로운 질문
          </span>
        </button>

        <button
          type="button"
          onClick={onManageInterests}
          className="box-border flex items-center gap-2.5 self-stretch cursor-pointer m-0 p-0 hover:bg-[rgba(30,33,36,0.5)] rounded transition-colors w-full text-left"
          aria-label="관심 심볼 관리"
        >
          <div className="box-border w-6 h-6 m-0 p-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"20\" height=\"19\" viewBox=\"0 0 20 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"add-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M10.5 5C10.5 4.72386 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.72386 9.5 5H10.5ZM9.5 14C9.5 14.2761 9.72386 14.5 10 14.5C10.2761 14.5 10.5 14.2761 10.5 14H9.5ZM14.5 10C14.7761 10 15 9.77614 15 9.5C15 9.22386 14.7761 9 14.5 9V10ZM5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10V9ZM19 9.5H18.5C18.5 14.1944 14.6944 18 10 18V18.5V19C15.2467 19 19.5 14.7467 19.5 9.5H19ZM10 18.5V18C5.30558 18 1.5 14.1944 1.5 9.5H1H0.5C0.5 14.7467 4.75329 19 10 19V18.5ZM1 9.5H1.5C1.5 4.80558 5.30558 1 10 1V0.5V0C4.75329 0 0.5 4.25329 0.5 9.5H1ZM10 0.5V1C14.6944 1 18.5 4.80558 18.5 9.5H19H19.5C19.5 4.25329 15.2467 0 10 0V0.5ZM10 5H9.5L9.5 9.5H10H10.5L10.5 5H10ZM10 9.5H9.5V14H10H10.5V9.5H10ZM14.5 9.5V9H10V9.5V10H14.5V9.5ZM10 9.5V9H5.5V9.5V10H10V9.5Z\" fill=\"white\"></path> </svg>",
              }}
            />
          </div>
          <span className="box-border flex-[1_0_0] text-white text-lg font-normal leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6">
            내 관심 심볼 관리
          </span>
        </button>

        <button
          type="button"
          onClick={onMDrive}
          className="box-border flex items-center gap-2.5 self-stretch cursor-pointer m-0 p-0 hover:bg-[rgba(30,33,36,0.5)] rounded transition-colors w-full text-left"
          aria-label="M Drive 접근"
        >
          <div className="box-border w-6 h-6 m-0 p-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"20\" height=\"21\" viewBox=\"0 0 20 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"drive-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19 5.5L10 0.5L1 5.5V15.5L10 20.5L19 15.5V5.5ZM10 13.8333C11.9132 13.8333 13.4641 12.341 13.4641 10.5C13.4641 8.65905 11.9132 7.16667 10 7.16667C8.08683 7.16667 6.5359 8.65905 6.5359 10.5C6.5359 12.341 8.08683 13.8333 10 13.8333Z\" stroke=\"white\" stroke-linejoin=\"round\"></path> </svg>",
              }}
            />
          </div>
          <span className="box-border flex-[1_0_0] text-white text-lg font-normal leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6">
            M Drive
          </span>
        </button>

        <div className="box-border flex flex-col items-start gap-6 self-stretch m-0 p-0">
          <button
            type="button"
            onClick={() => {
              setIsPastQuestionsExpanded(!isPastQuestionsExpanded);
              onPastQuestions?.();
            }}
            className="box-border flex items-center gap-2.5 self-stretch cursor-pointer m-0 p-0 hover:bg-[rgba(30,33,36,0.5)] rounded transition-colors w-full text-left"
            aria-expanded={isPastQuestionsExpanded}
            aria-label="지난 질문들 토글"
          >
            <div className="box-border w-6 h-6 m-0 p-0">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg width=\"18\" height=\"13\" viewBox=\"0 0 18 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0\"> <path d=\"M17 12.5H1M11.5 6.5H1M17 0.5H1\" stroke=\"white\" stroke-linecap=\"round\"></path> </svg>",
                }}
              />
            </div>
            <span className="box-border flex-[1_0_0] text-white text-lg font-normal leading-[28.8px] m-0 p-0 max-sm:text-base max-sm:leading-6">
              지난 질문들
            </span>
          </button>

          {isPastQuestionsExpanded && (
            <div className="box-border flex flex-col justify-center items-center gap-6 self-stretch m-0 pl-4 p-0 rounded-lg max-sm:pl-2">
              <div className="box-border flex flex-col items-start gap-3 self-stretch m-0 p-0">
                <h4 className="box-border self-stretch text-white text-xs font-normal leading-[16.8px] m-0 p-0">
                  오늘
                </h4>
                <div className="box-border flex flex-col items-start gap-[5px] self-stretch m-0 p-0">
                  {todayQuestions.map((question, index) => (
                    <QuestionItem
                      key={`today-${index}`}
                      question={question}
                      onClick={() => onQuestionClick?.(question)}
                    />
                  ))}
                </div>
              </div>

              <div className="box-border flex flex-col items-start gap-3 self-stretch m-0 p-0">
                <h4 className="box-border self-stretch text-white text-xs font-normal leading-[16.8px] m-0 p-0">
                  어제
                </h4>
                <div className="box-border flex flex-col items-start gap-[5px] self-stretch m-0 p-0">
                  {yesterdayQuestions.map((question, index) => (
                    <QuestionItem
                      key={`yesterday-${index}`}
                      question={question}
                      onClick={() => onQuestionClick?.(question)}
                    />
                  ))}
                </div>
              </div>

              <div className="box-border flex flex-col items-start gap-3 self-stretch m-0 p-0">
                <h4 className="box-border self-stretch text-white text-xs font-normal leading-[16.8px] m-0 p-0">
                  지난 일주일
                </h4>
                <div className="box-border flex flex-col items-start gap-[5px] self-stretch m-0 p-0">
                  {lastWeekQuestions.map((question, index) => (
                    <QuestionItem
                      key={`lastweek-${index}`}
                      question={question}
                      onClick={() => onQuestionClick?.(question)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <UserProfile 
        name="황규종" 
        email="elvin.kj.h@waiker.ai" 
      />
    </nav>
  );
};
