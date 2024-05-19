import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ProductData } from "../../../../types/productData";
const SearchResultsPage = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        if (query) {
            axios.get(`https://localhost:7115/api/Product/search?productName=${query}`)
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the products!", error);
                });
        }
    }, [query]);

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.productName}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultsPage;
