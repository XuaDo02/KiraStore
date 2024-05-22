import { useEffect, useState } from "react";
import { ProductData } from "../../../../types/productData";
import axios from "axios";
import DialogAddProduct from "./DialogAddProduct";
import DialogDeleteProduct from "./DialogDeleteProduct";
import DialogEditProduct from "./DialogEditProduct"; // Thêm DialogEditProduct vào import
import { toast } from "react-toastify";

export default function ProductManagement() {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false); // Thêm state để kiểm soát việc hiển thị DialogEditProduct
    const [editProduct, setEditProduct] = useState<ProductData | null>(null); // Thêm state để lưu thông tin sản phẩm cần chỉnh sửa

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

    const handleAddClick = () => {
        setShowAddDialog(true);
    };

    const handleEditClick = (product: ProductData) => {
        setEditProduct(product); // Lưu thông tin sản phẩm cần chỉnh sửa vào state
        setShowEditDialog(true); // Mở DialogEditProduct
    };

    //sử dụng callback
    const handleAddProduct = async (newProduct: ProductData) => {
        try {
            // Thực hiện gọi API để lấy thông tin chi tiết của sản phẩm mới
            const response = await axios.get<ProductData>(`https://localhost:7115/api/Product/${newProduct.id}`);
            // Cập nhật danh sách sản phẩm với thông tin mới
            setProducts(prevProducts => [...prevProducts, response.data]);
            setShowAddDialog(false);
        } catch (error) {
            console.error("Error fetching product data:", error);
            // Xử lý lỗi nếu có
        }
    };

    // HÀM XOÁ VÀ UPDATE_LIST START
    const [deleteProduct, setDeleteProduct] = useState<ProductData | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDeleteClick = (product: ProductData) => {
        setDeleteProduct(product);
        setShowDeleteDialog(true);
    };
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

    // Hàm cập nhật sản phẩm sau khi chỉnh sửa
    const handleUpdateProduct = (updatedProduct: ProductData) => {
        const updatedProducts = products.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
        );
        setProducts(updatedProducts);
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
                <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên sản phẩm</div>
                    </div>
                    <div className="col-span-1">
                        <div>Ảnh sản phẩm</div>
                    </div>
                    <div className="grid col-span-3">
                        <div>Mô tả</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Số lượng</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Đơn giá</div>
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
                            className={`grid grid-cols-12 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1 ">
                                <div>{product.id}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.productName}</div>
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <div><img src={product.productImg} className="w-16 h-16" /></div>
                            </div>
                            <div className="col-span-3">
                                <div className="text-left">{product.productDescription}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.productQuantity}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.productPrice.toLocaleString('vi-VN')}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.categoryName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{product.supplierName}</div>
                            </div>
                            <div className="grid col-span-2 grid-cols-4">
                                <div className="col-span-1"></div>
                                <button className="col-span-1 flex items-center justify-center" onClick={() => handleEditClick(product)}> {/* Sửa thông tin sản phẩm */}
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
                {/* Hiển thị Dialog chỉnh sửa sản phẩm */}
                {showEditDialog && (
                    <DialogEditProduct
                        onClose={() => setShowEditDialog(false)}
                        onUpdateProduct={handleUpdateProduct} // Truyền hàm cập nhật sản phẩm vào DialogEditProduct
                        product={editProduct} // Truyền thông tin sản phẩm cần chỉnh sửa vào DialogEditProduct
                    />
                )}
            </div>
        </>
    )
}

