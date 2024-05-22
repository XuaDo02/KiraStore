import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropdownCatalog from "./DropdownCatalog";
import Marquee from "react-fast-marquee";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = async () => {
        try {
            // Gửi yêu cầu tìm kiếm
            const response = await axios.get(`https://localhost:7115/api/Product/search?productName=${searchTerm}`);
            const searchResults = response.data;
            // Chuyển hướng đến trang tìm kiếm với kết quả
            window.location.href = `/searchResults?searchTerm=${encodeURIComponent(searchTerm)}`;
            setSearchTerm("");
        } catch (error) {
            console.error("Error searching for products:", error);
        }
        
    };

    return (
        <>
            <div className="h-14 grid grid-cols-12 bg-customOrange">
                <div className="flex text-black col-span-2">
                    <img src="/imgHeader/SK1.png" className="w-16 h-16" alt="Logo" />
                    <h1 className="pt-2.5 text-3xl">Kira Store</h1>
                </div>
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

                <div className="flex col-span-4 ml-10">
                    <div className="grid grid-cols-5 items-center ">
                        <div className="col-span-1">
                            <Link to="/homePage" className="hover:font-bold">Sản phẩm</Link>
                        </div>
                        <div className="col-span-1 pl-2">
                            <Link to="/blogPage" className="hover:font-bold">Giới thiệu</Link>
                        </div>
                        <div className="col-span-3 pl-3 relative">
                            <DropdownCatalog />
                        </div>
                    </div>
                </div>
                <div className="flex col-span-3 items-center">
                    <div className="grid grid-cols-6 ">
                        <div className="col-span-3 px-4">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg px-3 py-1 w-full focus:outline-none focus:border-blue-500"
                                placeholder="Tìm kiếm..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-span-1 pt-1">
                            <button className="focus:outline-none" onClick={handleSearch}>
                                <img src="/imgHeader/headerSearch.png" alt="Search" />
                            </button>
                        </div>
                        <div className="col-span-1 pt-1">
                            <Link to="/cart">
                                <button>
                                    <img src="/imgHeader/headerCart.png" alt="Cart" />
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-1 pt-1">
                            <Link to="/login">
                                <button>
                                    <img src="/imgHeader/headerUser.png" alt="User" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
