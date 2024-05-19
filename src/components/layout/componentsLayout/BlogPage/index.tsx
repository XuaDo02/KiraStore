export default function BlogPage() {
    return (
        <>
            <div className="bg-customWhite">
                <div className="flex justify-center h-28 items-center ">
                    <div className="mx-1 font-sans text-5xl text-customBrown">
                        <span>Blog của Kira</span>
                    </div>
                </div>
                {/* grid xếp */}
                <div className="py-8 px-5 bg-customOrange">
                    <div className="grid grid-cols-2 items-center">
                        <div className="col-span-1 flex justify-center items-center">
                            <img src="/imgMain/homePage5.jpg" className="max-w-full h-auto" />
                        </div>
                        <div className="col-span-1 grid grid-cols-2 gap-4">
                            <div className="flex justify-center items-center">
                                <img src="/imgMain/homePage4.jpg" className="max-w-full h-48" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/imgMain/homePage2.jpg" className="max-w-full h-48" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/imgMain/homePage3.jpg" className="max-w-full h-48 mt-7" />
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/imgMain/homePage4.jpg" className="max-w-full h-48 mt-7" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 pt-10 bg-customWhite">
                    <div className="col-start-2 flex justify-center items-center">
                        <img src="/imgMain/homePage7.jpg" />
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <h1 className="text-4xl text-customBrown">Jewelry tells <br /> a great story</h1>
                    </div>
                </div>
                <div className="grid grid-cols-4 items-center bg-customWhite">
                    <div className="col-start-2 flex justify-center items-center">
                        <h1 className="text-4xl text-customBrown">Jewelry tells <br /> a great story</h1>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <img src="/imgMain/homePage9.jpg" />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center px-5 ">
                    <div className="col-span-1 px-2">
                        <div className=" p-2">
                            <img src="/imgMain/homePage2.jpg" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores odit, architecto aspernatur, enim eos ut voluptatem blanditiis laboriosam atque exercitationem perferendis voluptatum nam debitis repudiandae iusto dolorum iure praesentium? Et.</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className=" p-2">
                            <img src="/imgMain/homePage5.jpg" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum corrupti, sint non expedita ab provident mollitia, nulla molestiae magni deleniti debitis earum rerum. Aliquam blanditiis quaerat distinctio eos commodi.</p>
                        </div>
                    </div>
                    <div className="col-span-1 px-2">
                        <div className=" p-2">
                            <img src="/imgMain/homePage4.jpg" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorum distinctio similique maxime nesciunt a, sapiente, in natus deserunt incidunt praesentium odit debitis laboriosam ipsam harum assumenda facere enim inventore!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}