import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        UserName: "",
        Address: "",
        Email: "",
        Phone: "",
        Password: "",
        Role: "Khách hàng",
        Gender: "Male"
    });
    const handleRegister = async (e: any) => {
        e.preventDefault();
        const response = await axios.post("https://localhost:7115/api/User", userInfo);
        if (response && response.status == 200) {
            navigate('/login');
        }
        else {
            alert('Đăng Kí Thất Bại')
        }
    }
    return (
        <>
            <div className=" mt-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-slate-200 p-8 rounded-lg shadow-md border border-customBlue">
                        <h1 className="text-3xl text-center mb-8">Đăng ký tài khoản</h1>
                        <hr className="border-t-1 border-customBlue mb-5"/>
                        <form onSubmit={handleRegister}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setUserInfo({ ...userInfo, UserName: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Họ & Tên"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setUserInfo({ ...userInfo, Phone: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setUserInfo({ ...userInfo, Address: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Địa chỉ"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setUserInfo({ ...userInfo, Email: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    required
                                    onChange={(e) => setUserInfo({ ...userInfo, Password: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-customBlue text-white rounded-md"
                                >
                                    ĐĂNG KÝ
                                </button>
                            </div>
                            <div className="text-center mb-3">
                                <span>Bạn đã có tài khoản. <Link to="/login" className="text-[#008000]">Đăng nhập</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}