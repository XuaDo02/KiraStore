import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        Email: "",
        Password: "",
    });
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const response = await axios.post("https://localhost:7115/api/User/DangNhap", userLogin);
        if (response && response.status == 200) {
            let { data } = response;
            localStorage.setItem("token", data.token);
            navigate("/");
        }
        else {
            alert('Đăng Nhập Thất Bại')
        }
    }
    return <>
        <div className=" mt-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-slate-200 p-8 rounded-lg shadow-md border border-customBlue">
                        <h1 className="text-3xl text-center mb-8">Đăng nhập</h1>
                        <hr className="border-t-1 border-customBlue mb-5"/>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setUserLogin({ ...userLogin, Email: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    required
                                    onChange={(e) => setUserLogin({ ...userLogin, Password: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-md text-customBlue"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="text-center mb-3">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-customBlue text-white rounded-md"
                                >
                                    ĐĂNG NHẬP
                                </button>
                            </div>
                            <div className="text-center mb-3">
                            <span>Bạn chưa có tài khoản? <Link to="/register" className="text-[#008000]">Đăng kí</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
}