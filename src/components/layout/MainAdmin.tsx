import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import AsideAdmin from "./componentsAdmin/AsideAdmin"
import HeaderAdmin from "./componentsAdmin/HeaderAdmin"
function MainAdmin({ children }: { children: any }): JSX.Element {
    return (
        <>
            <div className=" w-screen text-secondary bg-black h-screen">
                <HeaderAdmin />
                <div className="flex h-[calc(100vh_-_56px)]">
                    <AsideAdmin />
                    <div className="bg-customDark2 m-1 rounded-md w-screen max-h-full">
                        <div className="h-[calc(100%_-_44px)]">{children}</div>
                        {/* <div className="flex justify-center pt-48">
                            <div className="text-center">
                                <img src="/imgEmpty/cry.png" />
                                <p className="text-sm font-medium text-customGrayDark ">
                                    Danh sách trống
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                rtl={false}
                theme="light"
            />
        </>
    )
}
export default MainAdmin