import axios from "axios";
import { useState } from "react";
import { ProductData } from "../../../../../types/productData";
import { toast } from "react-toastify";

const DialogAddProduct = ({ onClose, onUpdateProductList }: { onClose: () => void; onUpdateProductList: (newProduct: ProductData) => void }) => {
  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    productImg: "",
    productDesciption: "",
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
      const response = await axios.post<ProductData>(
        "https://localhost:7115/api/Product",
        formData
      );
      onUpdateProductList(response.data); // Cập nhật danh sách sp trong ProductManagement
      toast.success("Thêm sản phẩm mới thành công!")
      onClose(); // Đóng DialogAddProduct sau khi thêm loại thành công
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleClose = () => {
    onClose(); // Đóng DialogAddProduct khi nhấn nút "Huỷ" hoặc "Đóng"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Thêm sản phẩm</span>
          <button className="flex ml-auto" onClick={handleClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mã loại</label>
              <input 
              name="productId" 
              value={formData.productId} 
              onChange={handleChange} 
              className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Tên sản phẩm</label>
              <input 
              name="productName" 
              value={formData.productName} 
              onChange={handleChange} 
              className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Ảnh sản phẩm</label>
              <input 
              type="file" 
              name="productImg" 
              value={formData.productImg}
              onChange={handleChange} 
              className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mô tả sản phẩm</label>
              <input name="productDesciption" value={formData.productDesciption}onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
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

export default DialogAddProduct;
