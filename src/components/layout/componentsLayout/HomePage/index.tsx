import { useEffect, useState } from "react";
import axios from "axios";
import { ProductData } from "../../../../types/productData";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ProductData[]>(
                    "https://localhost:7115/api/Product"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchData();
    }, []);

    const addToCart = (product: ProductData) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const existingItemIndex = cartItems.findIndex((item: ProductData) => item.id === product.id);

        if (existingItemIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng của sản phẩm đó
            cartItems[existingItemIndex].quantity += 1;
        } else {
            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới sản phẩm
            cartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    return (
        <>
            <div className="container mx-auto py-8 bg-customWhite">
                <h1 className="text-3xl font-bold mb-8 text-customBlue">Sản phẩm mùa hè mới</h1>
                <div className="grid grid-cols-4 gap-4 ">
                    {products.map((product) => (
                        <div key={product.id} className=" p-4 shadow rounded-lg bg-customGrayBg">
                            <div className="relative">
                                <img src={product.productImg} className="w-full h-56 object-cover mb-4" alt={product.productName} />
                                <Link to="/productDetail" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customBrown text-white px-3 py-2 rounded mt-2 opacity-0 hover:opacity-100">Xem chi tiết</Link>
                                <p className="font-semibold">{product.productName}</p>
                                <p>Giá: {product.productPrice} VND</p>
                                <button className="bg-customBlue text-white px-3 py-2 rounded ml-14 mt-2" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                            </div>
                            {/* <Link to="/cart" className="block mt-2 text-center text-blue-500">Xem giỏ hàng</Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
