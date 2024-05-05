import { useState } from "react";
import { toast } from "react-toastify";
import { CategoriesData } from "../../../../../types/categoriesData";

interface Props {
  category: CategoriesData | null;
  onClose: () => void;
  onUpdateCategory: (updatedCategory: CategoriesData) => void;
}

const DialogEditCategory: React.FC<Props> = ({ category, onClose, onUpdateCategory }) => {
  const [editedCategory, setEditedCategory] = useState<CategoriesData | null>(category);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedCategory) return;
    const { name, value } = e.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  const handleSubmit = () => {
    if (!editedCategory) return;
    onUpdateCategory(editedCategory); // Gọi hàm cập nhật thông tin loại sp
    toast.success("Cập nhật thông tin loại sản phẩm thành công!")
    onClose(); // Đóng dialog sau khi đã cập nhật xong
  };

  if (!category) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Sửa thông tin loại sản phẩm</span>
          <button className="flex ml-auto" onClick={onClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block  font-medium w-1/2 text-left px-5">Mã loại</label>
            <input type="text" name="id" value={editedCategory?.id || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} readOnly />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Tên loại</label>
            <input type="text" name="categoryName" value={editedCategory?.categoryName || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Mô tả</label>
            <input type="text" name="categoryDescription" value={editedCategory?.categoryDescription || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Ngày tạo</label>
            <input type="text" name="dateCreated" value={editedCategory?.dateCreated || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
        </div>

        <div className="mt-5">
          <hr className="border-t border-neutral-600 w-full"/>
        </div>

        <div className="flex justify-center my-5 h-18">
          <button className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md" onClick={onClose}>
            Huỷ
          </button>
          <button className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray" onClick={handleSubmit}>
            Sửa thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogEditCategory;
