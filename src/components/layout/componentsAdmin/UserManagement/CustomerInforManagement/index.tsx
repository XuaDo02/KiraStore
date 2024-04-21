import axios from "axios";
import { useEffect, useState } from "react"
import { CustomerData } from "../../../../../types/customerData";

export default function CustomerInforManagement() {
    const [customers, setCustomer] = useState<CustomerData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://64f7dd2f824680fd217ee3e4.mockapi.io/api/customers"
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
                <div className="grid grid-cols-7 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã nhà khách hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tên khách hàng</div>
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
                </div>
                <div>
                    {customers.map((customer, index) => (
                        <div
                            key={customer.customerId}
                            className={`grid grid-cols-7 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{customer.customerId}</div>
                            </div>
                            <div className="grid col-span-1">
                                <div>{customer.customerName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{customer.Address}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{customer.Phone}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{customer.Email}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}