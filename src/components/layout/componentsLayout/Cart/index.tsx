import axios from "axios";
import { AddSquare, MinusSquare } from "iconsax-react";
import React, { useEffect, useState } from "react";
interface CartItem {
    id: number;
    productName: string;
    productPrice: number;
    quantity: number;
}

export default function Cart() {
    const [customerInfo, setCustomerInfo] = useState({
        userId: 1,
        CustomerName : "",
        address: "",
        phone: "",
        Details: [],
    });
    const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json' 
        }
    };

    // Hàm xử lý khi người dùng bấm nút "Đặt hàng"
    const handleSubmitOrder = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7115/api/Order", {...customerInfo, Details: cartItems}, config);
            console.log(response)
            console.log("Đơn hàng đã được đặt:", response.data);
            // Hiển thị thông báo thành công
            alert("Đơn hàng đã được đặt thành công và lưu vào cơ sở dữ liệu!");
            // Reset form
            setCustomerInfo({userId:1, CustomerName : "", address: "", phone: "", Details: [] });
            setCartItems([]);
        } catch (error) {
            console.error("Lỗi khi đặt hàng:", error);
            // Xử lý lỗi và hiển thị thông báo lỗi cho người dùng
            alert("Đã xảy ra lỗi khi đặt hàng. Vui lòng kiểm tra đăng nhập!");
        }
    };
    const [cartItems, setCartItems] = React.useState<CartItem[]>(
        JSON.parse(localStorage.getItem("cartItems") || "[]")
    );

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const removeFromCart = (productId: number) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productId: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id == productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    }

    const increaseQuantity = (productId: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id == productId) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        });
        setCartItems(updatedCartItems);
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.productPrice * item.quantity;
        }, 0)
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
            <div className="flex flex-wrap">
                {/* Phần giỏ hàng */}
                <div className="w-full md:w-1/2 lg:w-1/2 px-4">
                    {cartItems.map((item: CartItem) => (
                        <div key={item.id} className="bg-white p-4 shadow rounded-lg mb-4">
                            <h2 className="text-lg font-semibold">{item.productName}</h2>
                            <p className="text-gray-500">Đơn giá: {item.productPrice} VND</p>
                            <div className="flex items-center">
                                <p className="mr-2">Số lượng:</p>
                                <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item.id)}>
                                        <MinusSquare color="#000000" size={20} />
                                    </button>
                                    <p className="mx-2">{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.id)}>
                                        <AddSquare color="#000000" size={20} />
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Xoá</button>
                        </div>
                    ))}

                    {/* Tính tổng tiền */}
                    <p>Tổng tiền: {getTotalPrice()} VND</p>
                </div>
                {/* Thông tin đặt hàng */}
                <div className="w-full md:w-1/2 lg:w-1/2 px-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Thông tin đặt hàng</h2>
                        <form onSubmit={handleSubmitOrder}>
                            <div className="mb-4">
                                <label htmlFor="name">Họ và tên:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="name" name="name" value={customerInfo.CustomerName } onChange={(e) => setCustomerInfo({ ...customerInfo, CustomerName : e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address">Địa chỉ nhận hàng:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="address" name="address" value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone">Số điện thoại:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="phone" name="phone" value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Đặt hàng</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}