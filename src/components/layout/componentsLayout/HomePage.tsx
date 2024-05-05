export default function HomePage() {
    return (
        <>
            <div className="bg-customOrange w-full h-full">
                <div className="flex h-16 items-center bg-customOrange">
                <h1 className="text-left ml-12 text-xl font-bold mb-4 text-customBlue">Sản phẩm đặc biệt</h1>
                    {/* <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Dây chuyền nữ</button>
                    </div>
                    <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Lắc tay nữ</button>
                    </div>
                    <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Lắc chân nữ</button>
                    </div> */}
                </div>
                <div className="grid grid-cols-4 items-center px-5 ">
                    <div className="col-span-1 px-2 relative">
                        <div className="bg-customWhite">
                            <img src="/imgMain/homePage2.jpg" className="w-full h-full"/>
                            
                            <p>Set bộ dây chuyền, khuyên tai cỏ 4 lá</p>
                            <p>500.000đ</p>
                            <div className="absolute bottom-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300">
                                <button className="bg-customBrown text-white px-10 py-2">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 relative">
                        <div className="bg-customWhite">
                            <img src="/imgMain/homePage5.jpg" />
                            <div className="absolute bottom-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300">
                                <button className="bg-customBrown text-white px-10 py-2">Mua ngay</button>
                            </div>
                            <p>Dây chuyền Naughty Girl</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 relative">
                        <div className="bg-customWhite">
                            <img src="/imgMain/homePage4.jpg" />
                            <div className="absolute bottom-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300">
                                <button className="bg-customBrown text-white px-10 py-2">Mua ngay</button>
                            </div>
                            <p>Quartz necklace</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2 relative">
                        <div className="bg-customWhite">
                            <img src="/imgMain/homePage3.jpg" />
                            <div className="absolute bottom-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 duration-300">
                                <button className="bg-customBrown text-white px-10 py-2">Mua ngay</button>
                            </div>
                            <p>Dây chuyền bạc nữ hoa đá</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}