import axios from "axios";
import { useEffect, useState } from "react"
import { SuppliersData } from "../../../../types/suppliersData";

export default function SuppilerManagement() {
    const [supliers, setSuppliers] = useState<SuppliersData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7115/api/Supplier"
                );
                setSuppliers(response.data);
            } catch (error) {
                console.error("Error fetching supplier data:", error);
                console.log(supliers)
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách nguồn cung cấp</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã</div>
                    </div>
                    <div className="col-span-3">
                        <div>Tên nhà cung cấp</div>
                    </div>
                    <div className="col-span-2">
                        <div>Địa chỉ </div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Số điện thoại</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Email</div>
                    </div>
                    <div className="grid col-span-2 ">
                        <div>Ngày bắt đầu hợp đồng</div>
                    </div>
                    <div className="grid col-span-2 ">
                        <div>Ngày kết thúc hợp đồng</div>
                    </div>
                </div>
                <div>
                    {supliers.map((supplier, index) => (
                        <div
                            key={supplier.id}
                            className={`grid grid-cols-12 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                {supplier.id}
                            </div>
                            <div className="grid col-span-3 text-left">
                                {supplier.supplierName}
                            </div>
                            <div className="col-span-2 text-left">
                                {supplier.address}
                            </div>
                            <div className="col-span-1">
                                {supplier.phone}
                            </div>
                            <div className="col-span-1 text-left">
                                {supplier.email}
                            </div>
                            <div className="col-span-2">
                                {new Date(supplier.startDate).toLocaleDateString()}
                            </div>
                            <div className="col-span-2">
                                {new Date(supplier.endDate).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}