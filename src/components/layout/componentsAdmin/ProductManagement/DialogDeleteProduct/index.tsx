
import { ProductData } from "../../../../../types/productData";

interface DialogDeleteProductProps {
    handleClose: () => void;
    onDeleteProduct: () => Promise<void>;
    product: ProductData| null;
}
const DialogDeleteProduct: React.FC<DialogDeleteProductProps> = ({ handleClose, onDeleteProduct, product }) => {
    const handleDeleteProduct = async () => {
        try {
            await onDeleteProduct();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
    
    if (!product) {
        return null;
    }
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
                    <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
                        <span className="text-lg font-sans font-semibold tracking-tight text-white">Xoá sản phẩm</span>
                        <button className="flex ml-auto" onClick={handleClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
                    </div>
                    <div className="my-16">
                        <div className=" flex items-center text-zinc-400 text-base px-5">
                            <p>Bạn có thực sự muốn xoá sản phẩm {product.productName} này ?</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <hr className="border-t border-neutral-600 w-full" />
                    </div>

                    <div className="flex justify-center my-5 h-18">
                        <button type="button"
                            className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                            onClick={handleClose}>
                            Huỷ
                        </button>
                        <button type="submit"
                            onClick={handleDeleteProduct}
                            className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray">
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DialogDeleteProduct;