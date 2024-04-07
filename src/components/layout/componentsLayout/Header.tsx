import Marquee from "react-fast-marquee";

export default function Header() {
    return (
        <>
            <div className="h-14 grid grid-cols-12 bg-customOrange">
                {/* Phần 1: Tên thương hiệu */}
                <div className="flex text-black col-span-2">
                    <img src="/imgHeader/SK1.png" className="w-16 h-16" />
                    <h1 className="pt-2.5 text-3xl">Kira Store</h1>
                </div>

                {/* Phần 2: Tin mới */}
                <div className="col-span-3 flex items-center justify-start relative">
                    <button className="relative z-10 w-40 text-sm bg-gradient-to-r from-customBrown to-customOrange rounded-lg hover:from-transparent hover:to-customBrown">
                        Tin mới
                        <div className="absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/6 bg-red-600 rounded-full w-2 h-2"></div>
                    </button>
                    <div>
                        <Marquee>
                            Kira Store xin kính chào quý khách
                        </Marquee>
                    </div>
                </div>

                {/* Phần 3: "Thông tin" */}
                <div className="flex col-span-5 ml-10">
                    <div className="grid grid-cols-5 items-center pl-5">
                        <div className="col-span-1">
                            <button>Trang chủ</button>
                        </div>
                        <div className="col-span-1 px-2">
                            <button>Giới thiệu</button>
                        </div>
                        <div className="col-span-1 px-2">
                            <button>Sản phẩm</button>
                        </div>
                        <div className="col-span-1 px-2">
                            <button>Tin tức</button>
                        </div>
                        <div className="col-span-1">
                            <button>Bản đồ</button>
                        </div>
                    </div>
                </div>

                {/* Phần 4: "Img" */}
                <div className="flex col-span-2 items-center">
                    <div className="grid grid-cols-3 ">
                        <div className="col-span-1 px-4">
                            <button>
                                <img
                                    src="/imgHeader/headerSearch.png"
                                />
                            </button>
                        </div>
                        <div className="col-span-1 px-4">
                            <button>
                                <img
                                    src="/imgHeader/headerCart.png"
                                />
                            </button>
                        </div>
                        <div className="col-span-1 px-4">
                            <button>
                                <img
                                    src="/imgHeader/headerUser.png"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Phần 5: "Người dùng" */}
                {/* <div className="flex col-span-1 items-center pr-8">
                    <div className="col-span-2 flex">
                        <div className="col-span-1">
                            <img
                                src="/imgHeader/headerUser.png"
                                className="px-3 pt-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-customGrayLight">Nguyen Van A</span>
                            <span className="text-customGray">09O123HFHF22</span>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}