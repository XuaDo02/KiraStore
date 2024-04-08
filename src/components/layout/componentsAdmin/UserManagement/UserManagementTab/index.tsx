import { useState } from "react"

export function UserManagementTab() {
    const [activeTabIndex, setActiveIndex] = useState(0);
    const tabsData = [
        {
            label: "Quản lý nhân viên",
            content: "djsdksdj"
        },
        {
            label: "Quản lý thông tin khách hàng",
            content: "djsdksdj"
        }
    ];
    return (
        <>
            <div>
                <div className="flex border-b text-customWhite text-sm ">
                    {tabsData.map((tab, idx) => {
                        return (
                            <button key={idx} className={`py-2 border-b-2 w-40 h-16 text-base ${idx === activeTabIndex
                                ? "border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2"
                                : "border-transparent hover:border-yellow-200"
                                }`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                {tab.label}
                            </button>
                        )
                    })}
                </div>
                <div>
                    <p>{tabsData[activeTabIndex].content}</p>
                </div>
            </div>
        </>
    )
}
export default UserManagementTab;