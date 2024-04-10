import { useEffect, useState } from "react"
import { CategoriesData } from "../../../../types/categoriesData";
import axios from "axios";

export default function CategoryManagement() {
    const [categories, setCategories] = useState<CategoriesData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<CategoriesData[]>(
              "https://6615003e2fc47b4cf27db117.mockapi.io/categories"
            );
            setCategories(response.data);
          } catch (error) {
            console.error("Error fetching employee data:", error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="pb-5 pt-5 pl-5">Quản lý danh mục sản phẩm</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-4 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã loại</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên loại sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Mô tả loại sản phẩm</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Hành động</div>
                    </div>
                </div>

                <div>
                    {categories.map((category, index) => (
                        <div
                            key={category.categoryId}
                            className={`grid grid-cols-4 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{category.categoryId}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{category.categoryName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{category.categoryDesciption}</div>
                            </div>
                            <div className="grid col-span-1 grid-cols-4">
                                <div className="col-span-1"></div>
                                <button className="col-span-1 flex items-center justify-center">
                                    <img src="/imgEmployee/Edit.png" className="w-5 h-5 mr-1" alt="Edit" /> Sửa
                                </button>
                                {/* Delete button */}
                                <button className="col-span-1 flex items-center justify-center">
                                    <img src="/imgCategory/remove.png" className="w-5 h-5 mr-1" alt="Delete" /> Xoá
                                </button>
                                <div className="col-span-1"></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}