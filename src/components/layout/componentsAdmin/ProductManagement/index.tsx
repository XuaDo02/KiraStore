import { useEffect, useState } from "react";
import { ProductData } from "../../../../types/productData";
import axios from "axios";
import DialogAddProduct from "./DialogAddProduct";
import DialogDeleteProduct from "./DialogDeleteProduct";
import { toast } from "react-toastify";

export default function ProductManagement() {
    const [products, setProducts] = useState<ProductData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ProductData[]>(
                    "https://localhost:7115/api/Product"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchData();
    }, []);

    const [showAddDialog, setShowAddDialog] = useState(false);
    const handleAddClick = () => {
        setShowAddDialog(true);
    }
    const handleAddProduct = (newProduct: ProductData) => {
        setProducts([...products, newProduct]);
        setShowAddDialog(false);
    }

    // HÀM XOÁ VÀ UPDATE_LIST START
    const [deleteProduct, setDeleteProduct] = useState<ProductData | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDeleteClick = (product : ProductData) => {
        setDeleteProduct(product);
        setShowDeleteDialog(true);
      }
      const handleDeleteProduct = async () => {
        if (deleteProduct) {
          try {
            await axios.delete(`https://localhost:7115/api/Product/${deleteProduct.id}`);
            const updatedProduct = products.filter(pd => pd.id !== deleteProduct.id);
            setProducts(updatedProduct);
            setShowDeleteDialog(false);
            toast.success("Xoá thành công!")
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        }
      };
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách sản phẩm</h1>
                </div>
                <div className="h-16 pb-5 pt-4 pr-16 flex justify-end">
                    <button
                        onClick={handleAddClick}
                        className="w-44 h-8 text-sm bg-customYellow rounded-md text-black font-semibold"
                    >
                        Thêm sản phẩm
                    </button>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-9 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Ảnh sản phẩm</div>
                    </div>
                    <div className="grid col-span-2 ">
                        <div>Mô tả</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Loại sản phẩm</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Nhà cung cấp</div>
                    </div>
                    <div className="grid col-span-2 ">
                        <div>Action</div>
                    </div>
                </div>
                <div>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`grid grid-cols-9 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1 ">
                                <div>{product.id}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.productName}</div>
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <div><img src={product.productImg} className="w-16 h-16"/></div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-left">{product.productDescription}</div>
                            </div>
                            <div className="col-span-1">
                                
                            </div>
                            <div className="col-span-1">
                                
                            </div>
                            <div className="grid col-span-2 grid-cols-4">
                                <div className="col-span-1"></div>
                                <button className="col-span-1 flex items-center justify-center">
                                    <img src="/imgEmployee/Edit.png" className="w-5 h-5 mr-1" alt="Edit" /> Sửa
                                </button>
                                {/* Delete button */}
                                <button
                                onClick={() => handleDeleteClick(product)}
                                className="col-span-1 flex items-center justify-center">
                                    <img src="/imgCategory/remove.png" className="w-5 h-5 mr-1" alt="Delete" /> Xoá
                                </button>
                                <div className="col-span-1"></div>
                            </div>
                        </div>
                    ))}
                </div>
                {showAddDialog && <DialogAddProduct onClose={() => setShowAddDialog(false)} onUpdateProductList={handleAddProduct} />}
                {showDeleteDialog && <DialogDeleteProduct handleClose={() => setShowDeleteDialog(false)} onDeleteProduct={handleDeleteProduct} product={deleteProduct} />}
            </div>
        </>
    )
}