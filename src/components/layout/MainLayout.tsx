import Banner from "./componentsLayout/Banner"
import BlogPage from "./componentsLayout/BlogPage"
import Footer from "./componentsLayout/Footer"
import Header from "./componentsLayout/Header"
import HomePage from "./componentsLayout/HomePage"

function MainLayout () {
    return (
        <>
            <div>
                <Header/>
                <Banner/>
                <div className="">
                    <HomePage/>
                    <BlogPage/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default MainLayout