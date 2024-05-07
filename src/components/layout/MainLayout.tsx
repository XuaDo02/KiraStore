import { ToastContainer } from "react-toastify"
import Footer from "./componentsLayout/Footer"
import Header from "./componentsLayout/Header"
import Banner from "./componentsLayout/Banner"

// function MainLayout () {
//     return (
//         <>
//             <div>
//                 <Header/>
//                 <Banner/>
//                 <div className="">
//                     <HomePage/>
//                     <BlogPage/>
//                 </div>
//                 <Footer/>
//             </div>
//         </>
//     )
// }
// export default MainLayout



function MainLayout({ children }: { children: any }): JSX.Element {
    return (
        <>
            <div className=" w-full h-full">
                <Header />
                <Banner />
                <div className="bg-customWhite m-1 rounded-md w-screen max-h-full">
                    <div>{children}</div>
                </div>
                <Footer />
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
export default MainLayout