import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { useOnClickOutside } from "usehooks-ts";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null); // State để lưu categoryId được chọn
    const dropdownRef = useRef(null);

    const handleOnClick = () => {
        setIsDropdownOpen(true);
    };

    const handleClickOutside = () => {
        setIsDropdownOpen(false);
    };

    useOnClickOutside(dropdownRef, handleClickOutside);

    const handleCategorySelect = (categoryId: number) => {
        setSelectedCategoryId(categoryId); // Lưu categoryId được chọn vào state
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="h-14 grid grid-cols-12 bg-customOrange">
                {/* Phần 1: Tên thương hiệu */}
                <div className="flex text-black col-span-2">
                    <img src="/imgHeader/SK1.png" className="w-16 h-16" />
                    <h1 className="pt-2.5 text-3xl">Kira Store</h1>
                </div>

                {/* Phần 2: Tin mới */}
                <div className="col-span-3 flex items-center justify-start relative">
                    <button className="relative z-10 w-40 text-sm bg-gradient-to-r from-customBrown to-customOrange rounded-lg hover:from-transparent hover:to-customBrown">
                        Tin mới
                        <div className="absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/6 bg-red-600 rounded-full w-2 h-2"></div>
                    </button>
                    <div>
                        <Marquee>
                            Kira Store xin kính chào quý khách
                        </Marquee>
                    </div>
                </div>

                {/* Phần 3: "Thông tin" */}
                <div className="flex col-span-5 ml-10">
                    <div className="grid grid-cols-5 items-center pl-5 ">
                        <div className="col-span-1">
                            <button className="hover:font-bold">Trang chủ</button>
                        </div>
                        <div className="col-span-1 px-2">
                            <button className="hover:font-bold">Giới thiệu</button>
                        </div>
                        <div className="col-span-1 px-2 relative">
                            <div className="relative" ref={dropdownRef}>
                                <button onClick={handleOnClick} className="hover:font-bold">Sản phẩm</button>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute left-0 mt-2 border-customOrange shadow-lg bg-customWhite rounded-md py-1 w-48 z-50"
                                    >
                                        <ul>
                                            <li>
                                                <button onClick={() => handleCategorySelect(1)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-pink-600">Dây chuyền nữ</button>
                                            </li>
                                            <li>
                                                <button onClick={() => handleCategorySelect(2)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-pink-600">Lắc tay nữ</button>
                                            </li>
                                            {/* Thêm các loại sản phẩm khác */}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-span-1 px-2">
                            <button className="hover:font-bold">Tin tức</button>
                        </div>
                        <div className="col-span-1">
                            <button className="hover:font-bold">Bản đồ</button>
                        </div>
                    </div>
                </div>

                {/* Phần 4: "Img" */}
                <div className="flex col-span-2 items-center">
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1 px-4">
                            <button>
                                <img src="/imgHeader/headerSearch.png" />
                            </button>
                        </div>
                        <div className="col-span-1 px-4">
                            <Link to="/cart">
                                <button>
                                    <img src="/imgHeader/headerCart.png" alt="Cart" />
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-1 px-4">
                            <button>
                                <img src="/imgHeader/headerUser.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiển thị danh sách sản phẩm */}
            {selectedCategoryId && <ProductList categoryId={selectedCategoryId} />}
        </>
    );
}
