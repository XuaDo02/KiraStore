import { AddSquare, MinusSquare } from "iconsax-react";
import React, { useEffect } from "react";
interface CartItem {
    id: number;
    productName: string;
    unitPrice: number;
    quantity: number;
}

export default function Cart() {
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
            return total + item.unitPrice * item.quantity;
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
                            <p className="text-gray-500">Đơn giá: {item.unitPrice} VND</p>
                            <div className="flex items-center">
                                <p className="mr-2">Số lượng:</p>
                                <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item.id)}>
                                    <MinusSquare color="#000000" size={20} />
                                    </button>
                                    <p className="mx-2">{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.id)}>
                                    <AddSquare color="#000000" size={20}/>
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Xoá</button>
                        </div>
                    ))}

                    {/* Tính tổng tiền */}
                    <p>Tổng tiền: {getTotalPrice()}</p>
                </div>
                {/* Thông tin đặt hàng */}
                <div className="w-full md:w-1/2 lg:w-1/2 px-4">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Thông tin đặt hàng</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="name">Họ và tên:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="name" name="name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="address">Địa chỉ nhận hàng:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="address" name="address" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2" htmlFor="phone">Số điện thoại:</label>
                                <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="phone" name="phone" />
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Đặt hàng</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
