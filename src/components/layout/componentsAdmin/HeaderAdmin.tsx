import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div className="text-white bg-customDark2 h-14 grid grid-cols-6">
      {/* Phần 1: Ảnh KB */}
      <div className="flex items-center justify-start pl-5">    
        <img src="/imgHeaderAd/KB.png" className="mr-2" />
      </div>

      {/* Phần 2: "Tin mới" */}
      <div className="col-span-2 flex items-center justify-start relative">
        <button className="relative z-10 w-32 h-5 text-sm text-customYellow bg-gradient-to-r from-customGrayDark to-customDark2 rounded-lg hover:from-transparent hover:to-gray-400">
          Tin mới
          <div className="absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/6 bg-customRed rounded-full w-2 h-2"></div>
        </button>

        <div>
          <Marquee>
            I can be a React component, multiple React components
          </Marquee>
        </div>
      </div>

      {/* Phần 3: "Thông tin" */}
      <div className="col-span-3 flex items-center justify-end">
        <div className="text-sm pt-1 flex">
          <p>09:59:59 </p>
          <p className="pr-5 pl-3 text-customGray ">16/01/2023</p>
        </div>
        <div className="grid grid-cols-7 items-center text-xs">
          <div className="grid col-span-4 grid-cols-5">
            <div className="col-span-1 ml-1 border-r border-l border-customBlack">
              <button>
                <img
                  src="/imgHeaderAd/search-normal.png"
                  className="px-2"
                />
              </button>
            </div>
            <div className="col-span-1 ml-2">
              <img src="/imgHeaderAd/lock.png" />
            </div>
            <div className="col-span-1 ml-2 relative w-6 h-6">
              <img
                className="w-full h-full"
                src="/imgHeaderAd/notification.png"
              />
              <div className="text-center absolute bg-customRed top-0 right-0 rounded-full w-3 h-3 flex justify-center items-center text-xs">
                9
              </div>
            </div>
            <div className="col-span-1 ml-2">
              <img src="/imgHeaderAd/setting-2.png" />
            </div>
            <div className="col-span-1 ml-1">
              <img src="/imgHeaderAd/message-question.png" />
            </div>
          </div>
          <div className="grid col-span-3 grid-cols-1">
            <div className="col-span-1 ml-2 flex">
              <img
                src="/imgHeaderAd/user.png"
                className="mr-2 w-10 h-10"
              />
              <div className="flex flex-col mt-1 text-sm font-sans">
                <span className="text-customGrayLight">Nguyen Van A</span>
                <span className="text-customGray">09O123HFHF22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}