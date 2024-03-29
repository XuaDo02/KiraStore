export default function HomePage() {
    return (
        <>
            <div className="bg-customOrange w-full h-full">
                <div className="flex justify-center h-16 items-center bg-customOrange">
                    <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Dây chuyền nữ</button>
                    </div>
                    <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Lắc tay nữ</button>
                    </div>
                    <div className="mx-1">
                        <button className="px-4 py-2 transition duration-300 hover:font-bold">Lắc chân nữ</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center px-5 ">
                    <div className="col-span-1 px-2">
                        <div className="bg-customWhite p-2">
                            <img src="/imgMain/homePage2.jpg" />
                            <p>Set bộ dây chuyền, khuyên tai cỏ 4 lá</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className="bg-customWhite p-2">
                            <img src="/imgMain/homePage5.jpg" />
                            <p>Dây chuyền Naughty Girl</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className="bg-customWhite p-2">
                            <img src="/imgMain/homePage4.jpg" />
                            <p>Quartz necklace</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className="bg-customWhite p-2">
                            <img src="/imgMain/homePage3.jpg" />
                            <p>Dây chuyền bạc nữ hoa đá</p>
                            <p>500.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}