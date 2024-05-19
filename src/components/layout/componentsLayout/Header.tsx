import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import DropdownCatalog from "./DropdownCatalog";
import axios from "axios";
import { ProductData } from "../../../types/productData";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<ProductData[]>([]);
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://localhost:7115/api/Product/search?productName=${searchTerm}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error searching for products:", error);
            setSearchResults([]);
        }
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

                {/* Phần 4: Ô nhập liệu tìm kiếm */}
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

                {/* Hiển thị kết quả tìm kiếm (nếu có) */}
                {Array.isArray(searchResults) && searchResults.length > 0 && (
                    <div className="col-span-12">
                        <h2>Kết quả tìm kiếm:</h2>
                        <ul>
                            {searchResults.map((product) => (
                                <li key={product.id}>{product.productName}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </>
    );
}
