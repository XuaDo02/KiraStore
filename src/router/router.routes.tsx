import { Home } from "iconsax-react";
import { IRoute } from "../interfaces/route";
import { PATH_BASE, PATH_CATEGORY_MANAGEMENT, PATH_SUPPILER_MANAGEMENT, PATH_USER_MANAGEMENT_TAB } from "./router.paths";
import UserManagementTab from "../components/layout/componentsAdmin/UserManagement/UserManagementTab";
import CategoryManagement from "../components/layout/componentsAdmin/CategoryManagement";
import SuppilerManagement from "../components/layout/componentsAdmin/SuppierManagement";

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
    }
]