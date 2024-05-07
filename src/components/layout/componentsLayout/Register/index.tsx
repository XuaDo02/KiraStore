export default function Register() {
    return (
        <>
            <div className=" mt-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-slate-200 p-8 rounded-lg shadow-md border border-customBlue">
                        <h1 className="text-3xl text-center mb-8">Đăng ký tài khoản</h1>
                        <hr className="border-t-1 border-customBlue mb-5"/>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Họ và tên"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Địa chỉ"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-customBlue text-white rounded-md"
                                >
                                    ĐĂNG KÝ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}