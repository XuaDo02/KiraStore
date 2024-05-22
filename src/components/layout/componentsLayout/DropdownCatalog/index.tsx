import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useOnClickOutside } from 'usehooks-ts';

interface Category {
    id: number;
    categoryName: string;
}

export default function DropdownCatalog() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const refDropdown = useRef(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://localhost:7115/api/Category');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useOnClickOutside(refDropdown, handleClickOutside);

    return (
        <>
            <div className="relative">
                <button onClick={toggleDropdown} className="hover:font-bold">
                    Danh mục sản phẩm
                </button>
                {isOpen && (
                    <div className="absolute bg-customOrange shadow-lg rounded-lg mt-2 w-48 z-50" ref={refDropdown}>
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/catalog/${category.id}/products`}
                                className="block px-4 py-2 text-black hover:bg-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {category.categoryName}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
