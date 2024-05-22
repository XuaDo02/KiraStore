import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductData } from "../../../../types/productData";

interface SearchResultsProps {
    searchTerm: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm }) => {
    const [searchResults, setSearchResults] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`https://localhost:7115/api/Product/search?productName=${searchTerm}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error searching for products:", error);
                setSearchResults([]);
            }
        };
        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div className="container mx-auto py-8 bg-customWhite">
            <h2 className="text-4xl font-bold mb-8 text-center text-customBlue">Kết quả tìm kiếm cho "{searchTerm}"</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                    <div key={product.id} className="p-4 shadow-lg rounded-lg bg-customGrayBg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                        <img src={product.productImg} alt={product.productName} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-xl font-semibold text-customBlue mb-2">{product.productName}</h3>
                        <p className="text-lg text-customGrayDark">{product.productPrice.toLocaleString('vi-VN')} VND</p> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
