import AsideAdmin from "./componentsAdmin/AsideAdmin"
import HeaderAdmin from "./componentsAdmin/HeaderAdmin"

function MainAdmin({ children }: { children: any }): JSX.Element {
    return(
        <>
            <div className=" w-screen text-secondary bg-black h-screen">
                <HeaderAdmin/>
                <div className="flex h-[calc(100vh_-_56px)]">
                <AsideAdmin/>
                <div className="h-[calc(100%_-_44px)]">{children}</div>
                </div>
            </div>
        </>
    )
}
export default MainAdmin