import { Home } from "iconsax-react";
import { IRoute } from "../interfaces/route";
import { PATH_BASE, PATH_CART, PATH_CATEGORY_MANAGEMENT, PATH_CATEGORY_PRODUCTS, PATH_HOMEPAGE, PATH_PRODUCT_MANAGEMENT, PATH_SUPPILER_MANAGEMENT, PATH_USER_MANAGEMENT_TAB } from "./router.paths";
import UserManagementTab from "../components/layout/componentsAdmin/UserManagement/UserManagementTab";
import CategoryManagement from "../components/layout/componentsAdmin/CategoryManagement";
import SuppilerManagement from "../components/layout/componentsAdmin/SuppierManagement";
import ProductManagement from "../components/layout/componentsAdmin/ProductManagement";
import ProductList from "../components/layout/componentsLayout/ProductList";
import HomePage from "../components/layout/componentsLayout/HomePage";
import Cart from "../components/layout/componentsLayout/Cart";

export const routes: IRoute[] = [
    {
        path: PATH_BASE,
        element: <Home/>
    },
    {
        path: PATH_USER_MANAGEMENT_TAB,
        element: <UserManagementTab/>
    },
    {
        path: PATH_CATEGORY_MANAGEMENT,
        element: <CategoryManagement/>
    },
    {
        path: PATH_SUPPILER_MANAGEMENT,
        element: <SuppilerManagement/>
    },
    {
        path: PATH_PRODUCT_MANAGEMENT,
        element: <ProductManagement/>
    },
    {
        path: PATH_CART,
        element: <Cart/>
    },
    {
        path: PATH_HOMEPAGE,
        element: <HomePage/>
    },
    {
        path: PATH_CATEGORY_PRODUCTS,
        element: <ProductList categoryId={0}/>
    }
]