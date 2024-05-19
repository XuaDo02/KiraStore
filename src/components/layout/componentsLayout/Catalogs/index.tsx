import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
    id: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
    // productDescription: string;
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

    return (
        <>
            <div className="bg-customWhite my-5">
                {/* <h2 className="text-3xl font-bold mb-8 text-customBlue">Sản phẩm thuộc loại {categoryId}</h2> */}
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 shadow rounded-lg bg-customGrayBg">
                            <img src={product.productImg} alt={product.productName} className="w-full h-48 object-cover" />
                            <h3 className="text-lg font-semibold">{product.productName}</h3>
                            {/* <p>{product.productDescription}</p> */}
                            <p className="text-gray-600">{product.productPrice} VND</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Catalogs;
