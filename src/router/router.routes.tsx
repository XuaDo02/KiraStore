import { Home } from "iconsax-react";
import { IRoute } from "../interfaces/route";
import { PATH_BASE, PATH_CART, PATH_CATEGORY_MANAGEMENT, PATH_CATEGORY_PRODUCTS, PATH_HOMEPAGE, PATH_ORDER, PATH_PRODUCT_DETAIL, PATH_PRODUCT_MANAGEMENT, PATH_REGISTER, PATH_SUPPILER_MANAGEMENT, PATH_USER_MANAGEMENT_TAB, PATH_LOGIN, PATH_DASHBOARD, PATH_ADMIN_BASE, PATH_BLOGPAGE } from "./router.paths";
import UserManagementTab from "../components/layout/componentsAdmin/UserManagement/UserManagementTab";
import CategoryManagement from "../components/layout/componentsAdmin/CategoryManagement";
import SuppilerManagement from "../components/layout/componentsAdmin/SuppierManagement";
import ProductManagement from "../components/layout/componentsAdmin/ProductManagement";
import HomePage from "../components/layout/componentsLayout/HomePage";
import Cart from "../components/layout/componentsLayout/Cart";
import OrderManagement from "../components/layout/componentsAdmin/OrderManagement";
import Register from "../components/layout/componentsLayout/Register";
import Login from "../components/layout/componentsLayout/LoginClient";
import ProductDetail from "../components/layout/componentsLayout/ProductDetail";
import Dashboard from "../components/layout/componentsAdmin/Dashboard";
import BlogPage from "../components/layout/componentsLayout/BlogPage";
import Catalogs from "../components/layout/componentsLayout/Catalogs";


export const routes: IRoute[] = [
    {
        path: PATH_BASE,
        element: <Home/>,
        isAdmin: false,
    },
    {
        path: PATH_ADMIN_BASE,
        element: <Home />,
        isAdmin: true
    },
    {
        path: PATH_USER_MANAGEMENT_TAB,
        element: <UserManagementTab/>,
        isAdmin: true,
    },
    {
        path: PATH_CATEGORY_MANAGEMENT,
        element: <CategoryManagement/>,
        isAdmin: true,
    },
    {
        path: PATH_SUPPILER_MANAGEMENT,
        element: <SuppilerManagement/>,
        isAdmin: true,
    },
    {
        path: PATH_PRODUCT_MANAGEMENT,
        element: <ProductManagement/>,
        isAdmin: true,
    },
    {
        path: PATH_CART,
        element: <Cart/>,
        isAdmin: false,
    },
    {
        path: PATH_HOMEPAGE,
        element: <HomePage/>,
        isAdmin: false,
    },
    {
        path: PATH_ORDER,
        element: <OrderManagement/>,
        isAdmin: true,
    },
    {
        path: PATH_CATEGORY_PRODUCTS,
        element: <Catalogs/>,
        isAdmin: false,
    },
    {
        path: PATH_PRODUCT_DETAIL,
        element: <ProductDetail/>,
        isAdmin: false,
    },
    {
        path: PATH_REGISTER,
        element: <Register/>,
        isAdmin: false,
    },
    {
        path: PATH_LOGIN,
        element: <Login />,
        isAdmin: false,
    },
    {
        path: PATH_DASHBOARD,
        element: <Dashboard />,
        isAdmin: true,
    },
    {
        path: PATH_BLOGPAGE,
        element:<BlogPage/>,
        isAdmin: false,
    }
]