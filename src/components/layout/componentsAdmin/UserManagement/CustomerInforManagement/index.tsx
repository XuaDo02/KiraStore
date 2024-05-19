import axios from "axios";
import { useEffect, useState } from "react"
import { CustomerData } from "../../../../../types/customerData";

export default function CustomerInforManagement() {
    const [customers, setCustomer] = useState<CustomerData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7115/api/User/role/Kh%C3%A1ch%20h%C3%A0ng"
                );
                setCustomer(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách khách hàng</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-5 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã nhà khách hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên khách hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Địa chỉ email</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Số điện thoại</div>
                    </div>
                </div>
                <div>
                    {customers.map((customer, index) => (
                        <div
                            key={customer.id}
                            className={`grid grid-cols-5 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{customer.id}</div>
                            </div>
                            <div className="grid col-span-1">
                                <div>{customer.userName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{customer.email}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{customer.phone}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}