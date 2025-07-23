import { useState } from "react";

export default function Analytics() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <div className="flex-1 bg-[#1D1C22] flex flex-col rounded-xl px-6 pt-6 pb-4 max-w-[390px]">
        <div className="flex gap-4 pl-4 justify-start md:justify-center lg:justify-center xl:justify-start">
          <img
            src="/icons/analytics/statsHead.svg"
            alt="Skill Sets Logo"
            className="w-7 h-7"
          />
          <h2 className="text-2xl font-bold text-[#CDD2D3]">Analytics</h2>
        </div>
        <div className="flex flex-row justify-between lg:flex-col lg:items-center xl:flex-row xl:justify-between md:flex-col md:items-center lg:mb-10 md:mb-10 mt-6 pl-4 pr-6 gap-4 md:gap-8 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-[#6DED97] font-bold text-5xl">392</p>
              <div className="flex gap-2 mt-3">
                <img
                  src="/icons/analytics/eye.svg"
                  alt="Skill Sets Logo"
                  className="w-5 h-5"
                />
                <p className="font-semibold text-white w-[80px]">Views On Site</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#6DED97] font-bold text-5xl">4<span className="text-2xl">+</span></p>
              <div className="flex gap-2 mt-3">
                <img
                  src="/icons/analytics/code.svg"
                  alt="Skill Sets Logo"
                  className="w-5 h-5"
                />
                <p className="font-semibold text-white  w-[80px]">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-[#6DED97] font-bold text-5xl">429</p>
              <div className="flex gap-2 mt-3">
                <img
                  src="/icons/analytics/github.svg"
                  alt="Skill Sets Logo"
                  className="w-5 h-5"
                />
                <p className="font-semibold text-white w-[80px]">Commits Made</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#6DED97] font-bold text-5xl">29<span className="text-xl">Mb</span></p>
              <div className="flex gap-2 mt-3">
                <img
                  src="/icons/analytics/folders.svg"
                  alt="Skill Sets Logo"
                  className="w-5 h-5"
                />
                <p className="font-semibold text-white  w-[80px]">Website Size</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#17151D] mt-auto p-5 items-center rounded-2xl flex justify-between">
          <div>
            <p className="text-[#6DED97] font-bold text-5xl max-[1360px]:text-4xl">{clickCount}</p>
            <div className="flex gap-2 mt-2">
              <img
                src="/icons/analytics/click.svg"
                alt="Skill Sets Logo"
                className="w-5 h-5"
              />
              <p className="font-semibold text-white">Click Meter</p>
            </div>
          </div>
          <button className="bg-[#343338] text-[#E5D7D7] font-bold px-5 py-2 rounded-3xl cursor-pointer hover:bg-[#232228] transition-colors duration-200" onClick={() => setClickCount(clickCount + 1)}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}
