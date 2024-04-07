export default function Footer() {
    return (
        <>
            <div>
                <hr className="bg-black" />
                <div className="bg-white dark:bg-gray-900 grid grid-cols-3">
                    <div>
                        <div className="flex items-center">
                            <img src="/imgHeader/SK1.png" className="w-80 h-80" />
                            <span className="self-center text-3xl font-semibold">Kira Store</span>
                        </div>
                    </div>
                    <div className="pt-20 col-span-2 grid grid-cols-3 px-16">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase dark:text-white">Về Kira</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                                <li className="mb-4">
                                    <a className="hover:underline">Câu chuyện của Kira</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline">Tuyển dụng</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Kinh doanh</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase dark:text-white">dịch vụ khách hàng</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a className="hover:underline">Hướng dẫn đo size trang sức</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline">Hướng dẫn thanh toán </a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline">Cẩm nang trang sức </a>
                                </li>
                                <li>
                                    <a className="hover:underline">Câu hỏi thường gặp </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase dark:text-white">chính sách cửa hàng</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a className="hover:underline">Chính sách hoàn tiền</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline">Chính sách giao hàng</a>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:underline">Chính sách bảo hành</a>
                                </li>
                                <li>
                                    <a className="hover:underline">Chính sách bảo mật thông tin khách hàng</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
