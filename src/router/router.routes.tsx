import { Home } from "iconsax-react";
import { IRoute } from "../interfaces/route";
import { PATH_BASE, PATH_USER_MANAGEMENT_TAB } from "./router.paths";
import UserManagementTab from "../components/layout/componentsAdmin/UserManagement/UserManagementTab";

export const routes: IRoute[] = [
    {
        path: PATH_BASE,
        element: <Home/>
    },
    {
        path: PATH_USER_MANAGEMENT_TAB,
        element: <UserManagementTab/>
    }
]