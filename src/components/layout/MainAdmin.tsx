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
                    <div className="overflow-y-auto bg-customDark2 m-1 rounded-md w-full max-h-full">
                        <div className="h-[calc(100%_-_44px)]">{children}</div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
export default MainAdmin