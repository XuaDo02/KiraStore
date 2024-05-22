import { useEffect, useState } from "react";
import { CategoriesData } from "../../../../types/categoriesData";
import axios from "axios";
import DialogAddCategory from "./DialogAddCategory";
import { toast } from "react-toastify";
import DialogDeleteCategory from "./DialogDeleteCategory";
import DialogEditCategory from "./DialogEditCategory";

const CategoryManagement = () => {
    const [categories, setCategories] = useState<CategoriesData[]>([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoriesData | null>(null);
    const [deleteCategory, setDeleteCategory] = useState<CategoriesData | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CategoriesData[]>(
                    "https://localhost:7115/api/Category"
                );
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories data:", error);
            }
        };

        fetchData();
    }, []);

    const handleAddClick = () => {
        setShowAddDialog(true);
    };

    const handleAddCategory = (newCategory: CategoriesData) => {
        console.log('Adding new category:', newCategory);
        setCategories(prevCategories => [...prevCategories, newCategory]);
        setShowAddDialog(false);
    };

    const handleEditClick = (category: CategoriesData) => {
        setSelectedCategory(category);
        setShowEditDialog(true);
    };

    const handleUpdateCategory = async (updatedCategory: CategoriesData) => {
        try {
            await updateCategoryOnAPI(updatedCategory);

            const updatedCategories = categories.map(cat => {
                if (cat.id === updatedCategory.id) {
                    return updatedCategory;
                }
                return cat;
            });
            setCategories(updatedCategories);
            setShowEditDialog(false);
        } catch (error) {
            console.error("Error updating category:", error);
            toast.error("Cập nhật thông tin category thất bại!");
        }
    };

    const updateCategoryOnAPI = async (updatedCategory: CategoriesData) => {
        try {
            await axios.put(`https://localhost:7115/api/Category/${updatedCategory.id}`, updatedCategory);
        } catch (error) {
            console.error("Error updating category:", error);
            toast.error("Cập nhật thông tin category thất bại!");
        }
    };

    const handleDeleteClick = (category: CategoriesData) => {
        setDeleteCategory(category);
        setShowDeleteDialog(true);
    };

    const handleDeleteCategory = async () => {
        if (deleteCategory) {
            try {
                await axios.delete(`https://localhost:7115/api/Category/${deleteCategory.id}`);
                const updatedCategories = categories.filter(cat => cat.id !== deleteCategory.id);
                setCategories(updatedCategories);
                setShowDeleteDialog(false);
                toast.success("Xoá thành công!")
            } catch (error) {
                console.error("Error deleting category:", error);
            }
        }
    };

    return (
        <>
            <div className="relative">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Quản lý danh mục sản phẩm</h1>
                </div>
                <div className="h-16 pb-5 pt-4 pr-16 flex justify-end">
                    <button
                        onClick={handleAddClick}
                        className="w-44 h-8 text-sm bg-customYellow rounded-md text-black font-semibold"
                    >
                        Thêm mới loại sản phẩm
                    </button>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-5 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã loại</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên loại sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Mô tả loại sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Ngày tạo</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Hành động</div>
                    </div>
                </div>

                <div className="relative h-[calc(100vh - 240px)] overflow-y-auto">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`grid grid-cols-5 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{category.id}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{category.categoryName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{category.categoryDescription}</div>
                            </div>
                            <div className="col-span-1">
                                {new Date(category.dateCreated).toLocaleDateString()}
                            </div>
                            <div className="grid col-span-1 grid-cols-4">
                                <div className="col-span-1"></div>
                                <button
                                    onClick={() => handleEditClick(category)}
                                    className="col-span-1 flex items-center justify-center">
                                    <img src="/imgEmployee/Edit.png" className="w-5 h-5 mr-1" alt="Edit" /> Sửa
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(category)}
                                    className="col-span-1 flex items-center justify-center">
                                    <img src="/imgCategory/remove.png" className="w-5 h-5 mr-1" alt="Delete" /> Xoá
                                </button>
                                <div className="col-span-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
                {showEditDialog && <DialogEditCategory category={selectedCategory} onClose={() => setShowEditDialog(false)} onUpdateCategory={handleUpdateCategory} />}
                {showAddDialog && <DialogAddCategory onClose={() => setShowAddDialog(false)} onUpdateCategoryList={handleAddCategory} />}
                {showDeleteDialog && <DialogDeleteCategory handleClose={() => setShowDeleteDialog(false)} onDeleteCategory={handleDeleteCategory} category={deleteCategory} />}
            </div>
        </>
    );
};

export default CategoryManagement;
