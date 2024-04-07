export default function BlogPage() {
    return (
        <>
            <div className="bg-customWhite">
                <div className="flex justify-center h-28 items-center ">
                    <div className="mx-1 font-sans text-5xl text-customBrown">
                        <span>Blog của Kira</span>
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