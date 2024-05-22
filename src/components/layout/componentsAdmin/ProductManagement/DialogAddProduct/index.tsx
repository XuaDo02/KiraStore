import axios from "axios";
import { useEffect, useState } from "react";
import { ProductData } from "../../../../../types/productData";
import { toast } from "react-toastify";
import { CategoriesData } from "../../../../../types/categoriesData";
import { SuppliersData } from "../../../../../types/suppliersData";

interface DialogAddProductProps {
  onClose: () => void;
  onUpdateProductList: (newProduct: ProductData) => void;
}
const DialogAddProduct: React.FC<DialogAddProductProps> = ({ onClose, onUpdateProductList }) => {
  const [formData, setFormData] = useState({
    productName: "",
    file: null,
    productDescription: "",
    productPrice: "",
    productQuantity: "",
    categoryId: "",
    supplierId: "",
  });

  const [anh, setAnh] = useState([]);
  //hàm xử lý chọn ảnh
  const handleChangeImage = (e:any) => {
    setAnh(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      file: e.target.files[0],
    }));
  }
  //hàm in ảnh
  const inCacAnh = () => 
    [...anh].map ( anh => (
      <div>
        <img src={URL.createObjectURL(anh)} width="150px"></img>
      </div>
    ));

  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [suppliers, setSuppliers] = useState<SuppliersData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get("https://localhost:7115/api/Category");
        setCategories(categoryResponse.data);

        const supplierResponse = await axios.get("https://localhost:7115/api/Supplier");
        setSuppliers(supplierResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    console.log(files, 'files')
    if (name === "file" && files) {
      alert('123')
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        console.log(key, 'key')
        data.append(key, formData[key]);
      });

      console.log(data, 'data');

      const response = await axios.post("https://localhost:7115/api/Product", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      toast.success("Thêm sản phẩm mới thành công!");
      onUpdateProductList(response.data);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Có lỗi xảy ra khi thêm sản phẩm");
    }
  };

  const handleClose = () => {
    onClose();
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
              <label className="block font-medium w-1/2 text-left px-5">Tên sản phẩm</label>
              <input
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              />
            </div>

            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Ảnh sản phẩm</label>
              <input
                type="file"
                multiple
                accept="image/"
                name="file"
                onChange={handleChangeImage}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              />
              {inCacAnh()}
            </div>

            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Giá</label>
              <input
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right "
              />
            </div>

            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Số lượng</label>
              <input
                name="productQuantity"
                value={formData.productQuantity}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              />
            </div>

            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mô tả sản phẩm</label>
              <input
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              />
            </div>

            <div className="mb-2 flex items-center text-sm text-zinc-400">
              <label className="block font-medium w-1/2 text-left px-5 ">Loại sản phẩm</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              >
                <option value="">Chọn loại sản phẩm</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.categoryName}</option>
                ))}
              </select>
            </div>

            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Nhà cung cấp</label>
              <select
                name="supplierId"
                value={formData.supplierId}
                onChange={handleChange}
                className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right"
              >
                <option value="">Chọn nhà cung cấp</option>
                {suppliers.map(supplier => (
                  <option key={supplier.id} value={supplier.id}>{supplier.supplierName}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>

          <div className="flex justify-center my-5 h-18">
            <button
              type="button"
              className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
              onClick={handleClose}
            >
              Huỷ
            </button>
            <button
              type="submit"
              className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogAddProduct;
