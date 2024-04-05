import Banner from "./components/Banner"
import BlogPage from "./components/BlogPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import SearchTrendy from "./components/SearchTrendy"

function MainLayout () {
    return (
        <>
            <div>
                <Header/>
                <Banner/>
                <SearchTrendy/>
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