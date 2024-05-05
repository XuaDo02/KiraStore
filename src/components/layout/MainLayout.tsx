import Banner from "./componentsLayout/Banner"
import BlogPage from "./componentsLayout/BlogPage"
import Cart from "./componentsLayout/Cart"
import Footer from "./componentsLayout/Footer"
import Header from "./componentsLayout/Header"
import HomePage from "./componentsLayout/HomePage"

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

function MainLayout ({ children }: { children: any }): JSX.Element {
    return (
        <>
            <div className=" w-screen h-screen">
                <Header />
                <Banner/>
                <div>{children}</div>
                <Footer/>
            </div>
        </>
    )
}
export default MainLayout