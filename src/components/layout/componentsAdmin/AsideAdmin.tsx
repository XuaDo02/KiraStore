import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
      imgSrc: "/imgAsideAd/people.png",
      text: "Quản lý danh mục sản phẩm"
    },
    {
      imgSrc: "/imgAsideAd/product.png",
      text: "Quản lý sản phẩm"
    },
    {
      imgSrc: "/imgAsideAd/shop.png",
      text: "Quản lý người dùng",
      isDropdown: true,
      dropDownLinks: [
        {
          imgSrc: "/imageMenu/trade.png",
          text: "Đặt lệnh",
          to: "/datlenh"
        },
        {
          imgSrc: "/imageMenu/note-2.png",
          text: "Sổ lệnh",
          to: "/solenh"
        },
        {
          imgSrc: "/imageMenu/chart-success.png",
          text: "Xác nhận lệnh",
          to: "/xacnhanlenh"
        },
        {
          imgSrc: "/imageMenu/message-edit.png",
          text: "Đăng ký quyền mua",
          to: "/registerBuyTab",
          className: "bg-yellow-500"
        },
        {
          imgSrc: "/imageMenu/forward-item.png",
          text: "Trái phiếu chuyển đổi",
          to: "/traiphieuchuyendoi"
        },
        {
          imgSrc: "/imageMenu/recovery-convert.png",
          text: "Chuyển khoản chứng khoán",
          to: "/chuyenkhoanchungkhoan"
        }
      ]
    },
    {
      imgSrc: "/imgAsideAd/box.png",
      text: "Quản lý đơn hàng"
    },
    {
      imgSrc: "/imgAsideAd/chat.png",
      text: "Thống kê và báo cáo"
    },
    {
      imgSrc: "/imgAsideAd/note.png",
      text: "Quản lý bài viết"
    },
    {
      imgSrc: "/imgAsideAd/user.png",
      text: "Quản lý thông tin khách hàng"
    },
  ];

  return (
    <>
      <aside className="w-24 h-full text-gray-300 bg-customDark2 text-sm ">
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
        </ul>
      </aside>
    </>
  );
}
