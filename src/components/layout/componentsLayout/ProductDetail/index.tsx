import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductData } from "../../../../types/productData";
import { toast } from "react-toastify";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductData | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<ProductData>(`https://localhost:7115/api/Product/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const addToCart = (product: ProductData) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const existingItemIndex = cartItems.findIndex((item: ProductData) => item.id === product.id);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        toast.success(`Sản phẩm đã được thêm vào giỏ hàng`);
    };

    return (
        <div className="container mx-auto py-8 bg-customWhite">
            <h1 className="text-4xl font-bold mb-8 text-customBlue text-center">{product.productName}</h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
                <img src={product.productImg}
                    alt={product.productName}
                    className="w-full lg:w-1/2 h-96 object-cover mb-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl " />
                <div className="ml-0 lg:ml-8 mt-8 lg:mt-0 text-center lg:text-left">
                    Giá: <span className="text-customBlue">{product.productPrice.toLocaleString('vi-VN')} VND</span>
                    <p className="text-lg text-customGrayDark mb-8">{product.productDescription}</p>
                    <button className="bg-customBlue text-white px-6 py-3 rounded shadow-lg hover:bg-customBlueDark transition duration-300" onClick={() => addToCart(product)}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}
