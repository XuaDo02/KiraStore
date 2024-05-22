import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Product {
    id: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
    productImg: string;
}

const Catalogs: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        console.log("categoryId:", categoryId);
        const fetchProducts = async () => {
            try {
                if (categoryId) {
                    const response = await axios.get(`https://localhost:7115/api/Product/category/${categoryId}`);
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoryId]);
    
    const addToCart = (product: Product) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const existingItemIndex = cartItems.findIndex((item: Product) => item.id === product.id);

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
            <h1 className="text-4xl font-bold mb-8 text-center text-customBlue">Sản phẩm theo danh mục</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="p-4 shadow-lg rounded-lg bg-customGrayBg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        <img src={product.productImg} alt={product.productName} className="w-full h-56 object-cover rounded-t-lg mb-4" />
                        <Link to={`/productDetail/${product.id}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customBrown text-white px-3 py-2 rounded mt-2 opacity-0 hover:opacity-100">Xem chi tiết</Link>
                        <h3 className="text-xl font-semibold text-customBlue mb-2">{product.productName}</h3>
                        <p className="text-lg text-customGrayDark">{product.productPrice.toLocaleString('vi-VN')} VND</p>
                        <button className="bg-customBlue text-white px-3 py-2 rounded ml-14 mt-2" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogs;
