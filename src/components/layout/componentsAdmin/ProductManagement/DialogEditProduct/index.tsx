import { useState } from "react";
import { toast } from "react-toastify";
import { ProductData } from "../../../../../types/productData";

interface Props {
  product: ProductData | null;
  onClose: () => void;
  onUpdateProduct: (updatedProduct: ProductData) => void;
}

const DialogEditProduct: React.FC<Props> = ({ product, onClose, onUpdateProduct }) => {
  const [editedProduct, setEditedProduct] = useState<ProductData | null>(product);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedProduct) return;
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!editedProduct) return;
    // Thêm logic để xử lý ảnh nếu cần thiết
    const updatedProduct = { ...editedProduct, file: selectedImage };
    onUpdateProduct(updatedProduct);
    toast.success("Cập nhật thông tin sản phẩm thành công!");
    onClose();
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Sửa thông tin sản phẩm</span>
          <button className="flex ml-auto" onClick={onClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block font-medium w-1/2 text-left px-5">Mã sản phẩm</label>
            <input type="text" name="id" value={editedProduct?.id || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} readOnly />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Tên sản phẩm</label>
            <input type="text" name="productName" value={editedProduct?.productName || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Mô tả</label>
            <input type="text" name="productDescription" value={editedProduct?.productDescription || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Số lượng</label>
            <input type="text" name="productQuantity" value={editedProduct?.productQuantity || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Giá</label>
            <input type="text" name="productPrice" value={editedProduct?.productPrice || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          {/* Thêm trường chọn ảnh */}
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Ảnh sản phẩm</label>
            <input type="file" name="file" onChange={handleImageChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="w-24 h-24" />}
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

export default DialogEditProduct;
