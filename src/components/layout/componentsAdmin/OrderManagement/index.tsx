import axios from "axios";
import { useEffect, useState } from "react"
import { OrderData } from "../../../../types/orderData";

export default function OrderManagement() {
    const [orders, setOrders] = useState<OrderData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://64f015e48a8b66ecf779241a.mockapi.io/api/orders"
                );
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách đơn hàng</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-4 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã đơn hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Ngày đặt hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tổng tiền </div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Khách hàng</div>
                    </div>
                </div>
                <div>
                    {orders.map((order, index) => (
                        <div
                            key={order.orderId}
                            className={`grid grid-cols-4 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{order.orderId}</div>
                            </div>
                            <div className="col-span-1">
                                {new Date(order.orderDate).toLocaleDateString()}
                            </div>
                            <div className="grid col-span-1">
                                <div>{order.TotalPrice}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{order.customerName}</div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}