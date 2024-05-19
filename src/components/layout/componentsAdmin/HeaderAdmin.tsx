import Marquee from "react-fast-marquee";

export default function Header() {
   // Lấy phần tử div để hiển thị ngày giờ
const currentDateTimeElement = document.getElementById("currentDateTime");

// Hàm cập nhật ngày giờ
function updateDateTime() {
  // Tạo một đối tượng Date mới, đại diện cho thời gian hiện tại
  const currentDate = new Date();

  // Lấy thông tin ngày, tháng, năm
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Tháng tính từ 0 đến 11, cần cộng thêm 1
  const year = currentDate.getFullYear();

  // Lấy thông tin giờ, phút, giây
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Định dạng lại các giá trị nếu cần
  const formattedMonth = (month < 10 ? '0' : '') + month;
  const formattedDay = (day < 10 ? '0' : '') + day;
  const formattedHours = (hours < 10 ? '0' : '') + hours;
  const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
  const formattedSeconds = (seconds < 10 ? '0' : '') + seconds;

  // Tạo chuỗi ngày giờ định dạng
  const formattedDateTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${formattedDay}/${formattedMonth}/${year}`;

  // Cập nhật nội dung của phần tử div
  if (currentDateTimeElement instanceof HTMLElement) {
    currentDateTimeElement.textContent = formattedDateTime;
  }
}

// Gọi hàm cập nhật mỗi giây
setInterval(updateDateTime, 1000);

// Cập nhật ngày giờ ban đầu
updateDateTime();

  return (
    <div className="text-white bg-customDark2 h-14 grid grid-cols-6">
      {/* Phần 1: Ảnh KS */}
      <div className="flex items-center justify-start pl-5">
        <img src="/imgHeaderAd/KR.png" className="mr-2 w-16 h-16" />
        <h1 className="text-2xl font-sans">KiraStore</h1>
      </div>

      {/* Phần 2: "Tin mới" */}
      <div className="col-span-2 flex items-center justify-start relative">
        <button className="relative z-10 w-20 h-5 text-sm text-customYellow bg-gradient-to-r from-customGrayDark to-customDark2 rounded-lg hover:from-transparent hover:to-gray-400">
          KS
          <div className="absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/6 bg-customRed rounded-full w-2 h-2"></div>
        </button>

        <div>
          <Marquee>
            Xin chào quản trị viên - nhân viên Kira Store
          </Marquee>
        </div>
      </div>

      {/* Phần 3: "Thông tin" */}
      <div className="col-span-3 flex items-center justify-end">
        <div className="text-sm pt-1 flex">
          <div id="currentDateTime"></div>
        </div>
        <div className="grid grid-cols-7 items-center text-xs">
          <div className="grid col-span-1 grid-cols-5">
            {/* <div className="col-span-1 ml-1 border-r border-l border-customBlack">
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
            </div>*/}
          </div> 
          <div className="grid col-span-4 grid-cols-1">
            <div className="col-span-1 ml-2 flex">
              <img
                src="/imgHeaderAd/user.png"
                className="mr-2 w-10 h-10"
              />
              <div className="flex flex-col mt-1 text-sm font-sans">
                <span className="text-customGrayLight">{localStorage.getItem("fullName")}</span>
                {/* <span className="text-customGray">09O123HFHF22</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}