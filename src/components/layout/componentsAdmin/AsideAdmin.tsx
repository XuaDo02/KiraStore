import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Aside() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  const refDialog = useRef(null);
  const handleClickOutSideDialog = () => {
    setShowDropdown(false);
  }

  useOnClickOutside(refDialog, handleClickOutSideDialog);

  return (
    <aside className="w-24 h-full text-gray-300 bg-customDark2 text-sm">
      <ul className="py-2" ref={refDialog}>
        <li className="px-1 py-1 flex flex-col items-center " >
          <img src="/imgAsideAd/shop.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý danh mục sản phẩm</span>
        </li>
        <li className="px-1 py-1 flex flex-col items-center" >
          <img src="/imgAsideAd/product.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý sản phẩm</span>
        </li>
        <li className="px-1 py-1 flex flex-col items-center" >
          <button onClick={toggleDropdown}>
            <img src="/imgAsideAd/people.png" className="mb-2 pl-7" />
            <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý người dùng</span>
          </button>
          {showDropdown && (
            <div className="absolute right-0 left-24 bg-customBlack rounded-md py-1 w-60 z-50">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="/userManagementTab" className="px-2 py-2 text-sm text-customGrayLight flex ml-2 hover:bg-customYellow hover:text-black ">Quản lý nhân viên</a>
                </li>
                <li>
                  <a className="px-2 py-2 text-sm text-customGrayLight flex ml-2 hover:bg-customYellow hover:text-black ">Quản lý thông tin khách hàng</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="px-1 py-1 flex flex-col items-center">
          <img src="/imgAsideAd/box.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý đơn hàng</span>
        </li>
        <li className="px-1 py-1 flex flex-col items-center">
          <img src="/imgAsideAd/chat.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Thống kê và báo cáo</span>
        </li>
        <li className="px-1 py-1 flex flex-col items-center">
          <img src="/imgAsideAd/note.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý bài viết</span>
        </li>
        <li className="px-1 py-1 flex flex-col items-center">
          <img src="/imgAsideAd/user.png" className="mb-2" />
          <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">Quản lý thông tin khách hàng</span>
        </li>
      </ul>
    </aside>
  );
}
