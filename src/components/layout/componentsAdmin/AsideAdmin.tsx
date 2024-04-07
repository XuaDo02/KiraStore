import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";
import { useOnClickOutside } from "usehooks-ts";

export default function Aside() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const refDialogTrading = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutSideDialogTradinng = () => {
    setIsDropdownOpen(false);
  };

  useOnClickOutside(refDialogTrading, handleClickOutSideDialogTradinng);

  const asideItems = [
    {
      imgSrc: "/images/imgAside/presention-chart.png",
      text: "Bảng giá"
    },
    {
      imgSrc: "/images/imgAside/category-2.png",
      text: "Giao diện của tôi"
    },
    {
      imgSrc: "/images/imgAside/Stock_trading.png",
      text: "Giao dịch",
      isDropdown: true,
      dropDownLinks: [
        {
          imgSrc: "/images/imageMenu/trade.png",
          text: "Đặt lệnh",
          to: "/datlenh"
        },
        {
          imgSrc: "/images/imageMenu/note-2.png",
          text: "Sổ lệnh",
          to: "/solenh"
        },
        {
          imgSrc: "/images/imageMenu/chart-success.png",
          text: "Xác nhận lệnh",
          to: "/xacnhanlenh"
        },
        {
          imgSrc: "/images/imageMenu/message-edit.png",
          text: "Đăng ký quyền mua",
          to: "/registerBuyTab",
          className: "bg-yellow-500"
        },
        {
          imgSrc: "/images/imageMenu/forward-item.png",
          text: "Trái phiếu chuyển đổi",
          to: "/traiphieuchuyendoi"
        },
        {
          imgSrc: "/images/imageMenu/recovery-convert.png",
          text: "Chuyển khoản chứng khoán",
          to: "/chuyenkhoanchungkhoan"
        }
      ]
    },
    {
      imgSrc: "/images/imgAside/Money_trading.png",
      text: "Giao dịch tiền"
    },
    {
      imgSrc: "/images/imgAside/Frame 427319649.png",
      text: "Quản lý tài khoản"
    },
    {
      imgSrc: "/images/imgAside/Market_statistics.png",
      text: "Công cụ phân tích"
    },
  ];

  return (
    <>
      <aside className="w-20 h-full text-gray-300 bg-customDark2 text-sm ">
        <ul className="py-2" ref={refDialogTrading}>
          {asideItems.map((item, index) => (
            <li
              key={index}
              className="px-1 py-1 flex flex-col items-center"
              onClick={item.isDropdown ? toggleDropdown : undefined}
            >
              <img src={item.imgSrc} className="mb-2" alt={item.text} />
              <span className="text-center text-xs text-customGrayDark">
                {item.text}
              </span>
              {item.isDropdown && isDropdownOpen && (
                <ul className="absolute right-0 left-24 bg-customBlack rounded-md py-1 w-60 z-50">
                  {item.dropDownLinks.map((link, index) => (
                    <li
                      key={index}
                      className="px-2 py-2 text-sm text-customGrayLight flex ml-2 hover:bg-customYellow hover:text-black "
                    >
                      <img src={link.imgSrc} alt={link.text} className="pr-4" />
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <button className="bg-customBlack w-4 h-8 mt-4 rounded-r-md">
            <ArrowLeft2 size="14" color="#d8d8d8" variant="Bold" />
          </button>
        </ul>
      </aside>
    </>
  );
}
