import axios from "axios";
import { useEffect, useState } from "react"
import { SuppliersData } from "../../../../types/suppliersData";

export default function SuppilerManagement() {
    const [supliers, setSuppliers] = useState<SuppliersData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://64f015e48a8b66ecf779241a.mockapi.io/api/suppiler"
                );
                setSuppliers(response.data);
            } catch (error) {
                console.error("Error fetching supplier data:", error);
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
                <div className="grid grid-cols-7 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã nhà cung cấp</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên nhà cung cấp</div>
                    </div>
                    <div className="col-span-1">
                        <div>Địa chỉ </div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Số điện thoại</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Email</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Ngày bắt đầu hợp đồng</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Ngày kết thúc hợp đồng</div>
                    </div>
                </div>
                <div>
                    {supliers.map((supplier, index) => (
                        <div
                            key={supplier.supplierId}
                            className={`grid grid-cols-7 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{supplier.supplierId}</div>
                            </div>
                            <div className="grid col-span-1">
                                <div>{supplier.supplierName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{supplier.Address}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{supplier.Phone}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{supplier.Email}</div>
                            </div>
                            <div className="col-span-1">
                                {new Date(supplier.StartDate).toLocaleDateString()}
                            </div>
                            <div className="col-span-1">
                                {new Date(supplier.EndDate).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}