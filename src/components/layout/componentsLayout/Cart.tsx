export default function Cart() {
    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>
                <div className="flex flex-wrap -mx-4">
                    {/* Phần giỏ hàng */}
                    <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-lg font-semibold">Tên sản phẩm</h2>
                            <p className="text-gray-500">Giá: $10.00</p>
                            <p className="text-gray-500">Số lượng: 2</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Xóa</button>
                        </div>
                        {/* Thêm các sản phẩm khác ở đây */}
                    </div>
                    {/* Thông tin đặt hàng */}
                    <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">Thông tin đặt hàng</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-2" htmlFor="name">Họ và tên:</label>
                                    <input className="w-full border border-gray-300 rounded-md px-3 py-2" type="text" id="name" name="name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-2" htmlFor="address">Địa chỉ:</label>
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
        </>
    )
}