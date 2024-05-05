import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
    id: number;
    productName: string;
    productImg: string;
    unitPrice: number;
    productDescription: string;
    supplierId: number;
    categoryId: number;
}

interface Props {
    categoryId: number; // Cụ thể hóa kiểu dữ liệu của categoryId
}

export default function ProductList({ categoryId }: Props) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://localhost:7115/api/Product?categoryId=${categoryId}`);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-customWhite p-4 rounded-md relative">
                        <img src={product.productImg} className="w-full h-48 object-cover mb-4" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-300">
                            <div className="bg-customBrown text-white px-10 py-2">
                                Mua ngay
                            </div>
                        </div>
                        <p className="font-bold">{product.productName}</p>
                        <p>Giá: {product.unitPrice}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
