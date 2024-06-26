import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CategoriesData } from "../../../../../types/categoriesData";

const DialogAddCategory = ({ onClose, onUpdateCategoryList }: { onClose: () => void; onUpdateCategoryList: (newCategory: CategoriesData) => void }) => {
  const [formData, setFormData] = useState({
    id: 0,
    categoryName: "",
    categoryDescription: "",
    dateCreated: new Date().toISOString()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<CategoriesData>(
        "https://localhost:7115/api/Category",
        formData
      );
      onUpdateCategoryList(response.data); // Cập nhật danh sách loại sản phẩm
      toast.success("Thêm loại sản phẩm mới thành công!");
      onClose(); // Đóng DialogAddCategory sau khi thêm thành công
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleClose = () => {
    onClose(); // Đóng DialogAddCategory khi nhấn nút "Huỷ" hoặc "Đóng"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Thêm loại sản phẩm</span>
          <button className="flex ml-auto" onClick={handleClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mã loại</label>
              <input name="id" type="number" value={formData.id} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Tên loại</label>
              <input name="categoryName" value={formData.categoryName} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mô tả loại sản phẩm</label>
              <input name="categoryDescription" value={formData.categoryDescription} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Ngày tạo</label>
              <input name="dateCreated" type="datetime-local" value={formData.dateCreated} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
          </div>
          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>

          <div className="flex justify-center my-5 h-18">
            <button type="button" className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md" onClick={handleClose}>
              Huỷ
            </button>
            <button type="submit" className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray">
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogAddCategory;

