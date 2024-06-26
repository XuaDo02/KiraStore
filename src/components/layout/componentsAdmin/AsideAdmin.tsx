import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
export default function Aside() {
  const navigation = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  const refDialog = useRef(null);
  const handleClickOutSideDialog = () => {
    setShowDropdown(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('token-admin');
    localStorage.removeItem('fullName');
    localStorage.removeItem('role');
    navigation("/admin/login");
  }

  useOnClickOutside(refDialog, handleClickOutSideDialog);

  return (
    <aside className="w-24 h-full text-gray-300 bg-customDark2 text-sm">
      <ul className="py-2" ref={refDialog}>
        {localStorage.getItem("role") == "Quản Trị Viên" &&
          <>
            <li className="px-1 py-1 flex flex-col items-center">
              <a href="/categoryManagement" className="text-center">
                <img src="/imgAsideAd/shop.png" className="mb-2 pl-7" alt="Shop" />
                <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black ">
                  Quản lý danh mục sản phẩm
                </span>
              </a>
            </li>
            <li className="px-1 py-1 flex flex-col items-center" >
              <a href="/productManagement" className="text-center">
                <img src="/imgAsideAd/product.png" className="mb-2 pl-7" />
                <span className="text-xs text-customGrayDark hover:bg-customYellow hover:text-black">
                  Quản lý sản phẩm
                </span>
              </a>
            </li>
            <li className="px-1 py-1 flex flex-col items-center" >
              <button onClick={toggleDropdown}>
                <img src="/imgAsideAd/people.png" className="mb-2 pl-7" />
                <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">
                  Quản lý người dùng
                </span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 left-24 bg-customBlack rounded-md py-1 w-60 z-50">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="/userManagementTab" className="px-2 py-2 text-sm text-customGrayLight flex ml-2 hover:bg-customYellow hover:text-black ">Quản lý nhân viên</a>
                    </li>
                    <li>
                      <a href="/userManagementTab" className="px-2 py-2 text-sm text-customGrayLight flex ml-2 hover:bg-customYellow hover:text-black ">Quản lý thông tin khách hàng</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </>
        }
        <li className="px-1 py-1 flex flex-col items-center">
          <a href="/orderManagement" className="text-center">
            <img src="/imgAsideAd/box.png" className="mb-2 pl-7" />
            <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">
              Quản lý đơn hàng
            </span>
          </a>
        </li>
        {localStorage.getItem("role") == "Quản Trị Viên" &&
          <>
            <li className="px-1 py-1 flex flex-col items-center">
              <a href="/supplierManagement" className="text-center">
                <img src="/imgAsideAd/shop.png" className="mb-2 pl-7" alt="Shop" />
                <span className=" text-xs text-customGrayDark hover:bg-customYellow hover:text-black pl-1">
                  Thông tin nhà cung cấp
                </span>
              </a>
            </li>
            <li className="px-1 py-1 flex flex-col items-center">
              <a href="/dashboard" className="text-center">
                <img src="/imgAsideAd/chat.png" className="mb-2 pl-7" />
                <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">
                  Thống kê và báo cáo
                </span>
              </a>
            </li>
          </>
        }
        <li className="px-1 py-1 flex flex-col items-center">
          <a onClick={handleLogout}>
            <img src="/imgAsideAd/logout.png" className="mb-2 ml-3" />
            <span className="text-center text-xs text-customGrayDark hover:bg-customYellow hover:text-black">
              Đăng Xuất
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
