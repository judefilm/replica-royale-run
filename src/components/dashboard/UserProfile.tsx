import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, email }) => {
  return (
    <div className="box-border flex items-center gap-3 self-stretch m-0 p-0 max-sm:gap-2">
      <div className="box-border flex items-center gap-[12.5px] bg-[rgba(30,33,36,1)] m-0 p-[7.5px] rounded-[123.75px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"25\" height=\"25\" viewBox=\"0 0 20 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"user-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 25px; height: 25px\"> <path d=\"M18.7493 21L18.7497 17.2503C18.7498 15.1791 17.0709 13.5 14.9997 13.5H5.00042C2.92952 13.5 1.25065 15.1787 1.25042 17.2496L1.25 21M13.75 4.75C13.75 6.82107 12.0711 8.5 10 8.5C7.92893 8.5 6.25 6.82107 6.25 4.75C6.25 2.67893 7.92893 1 10 1C12.0711 1 13.75 2.67893 13.75 4.75Z\" stroke=\"white\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </div>
      </div>
      <div className="box-border flex flex-col justify-center items-start flex-[1_0_0] m-0 p-0">
        <div className="box-border self-stretch text-white text-base font-bold leading-[25.6px] m-0 p-0 max-sm:text-sm max-sm:leading-5">
          {name}
        </div>
        <div className="box-border text-white text-[11px] font-normal leading-[15.4px] opacity-40 m-0 p-0 max-sm:text-[10px] max-sm:leading-[14px]">
          {email}
        </div>
      </div>
    </div>
  );
};
