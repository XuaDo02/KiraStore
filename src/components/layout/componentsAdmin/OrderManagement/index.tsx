import axios from "axios";
import { useEffect, useState } from "react"
import { OrderData } from "../../../../types/orderData";

export default function OrderManagement() {
    const [orders, setOrders] = useState<OrderData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7115/api/Order"
                );
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };
        fetchData();
    }, []);

    const handleGetData = async () => {
        try {
            const response = await axios.get(
                "https://localhost:7115/api/Order"
            );
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    }

    const handleChangeStatus = async(id: number, status: string) => {
        const response = await axios.put(
            `https://localhost:7115/api/Order/ChangeStatus/${id}?status=${status}`
        );
        if (response && response.status == 200) {
           await handleGetData();
        }
    }
    return (
        <>
            <div className="relative h-35px">
                <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                    <h1 className="py-4 pl-5">Danh sách đơn hàng</h1>
                </div>
                <div className="">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                <div className="grid grid-cols-8 text-customGrayLight text-center items-center w-full text-xs py-3">
                    <div className="grid col-span-1">
                        <div>Mã đơn hàng</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Khách hàng</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Điện thoại</div>
                    </div>
                    <div className="grid col-span-1 ">
                        <div>Địa chỉ nhận</div>
                    </div>
                    <div className="col-span-1">
                        <div>Ngày đặt hàng</div>
                    </div>
                    <div className="col-span-1">
                        <div>Tổng tiền </div>
                    </div>
                    <div className="col-span-1">
                        <div>Trạng thái</div>
                    </div>
                    <div className="col-span-1">
                        <div>#</div>
                    </div>
                </div>
                <div>
                    {orders.map((order, index) => (
                        <div
                            key={order.id}
                            className={`grid grid-cols-8 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
                        >
                            <div className="grid col-span-1">
                                <div>{order.id}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{order.customerName}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{order.phone}</div>
                            </div>
                            <div className="col-span-1">
                                <div>{order.address}</div>
                            </div>
                            <div className="col-span-1">
                                {new Date(order.orderDate).toLocaleDateString()}
                            </div>
                            <div className="col-span-1">
                                <div>{order.totalPrice}</div>
                            </div>
                            <div className="grid col-span-1">
                                <div>{order.status}</div>
                            </div>
                            <div className="grid col-span-1">
                                {order.status == "Đã Đặt Hàng" &&
                                    <>
                                        <button onClick={() => handleChangeStatus(order.id, 'Hủy Đơn')} className="bg-[#990000] text-white rounded-md">Hủy Đơn</button> | <button className="bg-customBlue text-white rounded-md" onClick={() => handleChangeStatus(order.id, 'Duyệt Đơn')}>Duyệt Đơn</button>
                                    </>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}