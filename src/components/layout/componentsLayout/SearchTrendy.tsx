
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const imageList = [
    { category: 'Trang sức vàng', image: '/imgSearchTrendy/trangsucvang.png' },
    { category: 'Trang sức bạc', image: '/imgSearchTrendy/trangsucbac.png' },
    { category: 'Dây truyền vàng', image: '/imgSearchTrendy/nhancuoi.png' },
    { category: 'Nhẫn kim cương', image: '/imgSearchTrendy/nhankimcuong.png' },
    { category: 'Bông tai vàng', image: '/imgSearchTrendy/bongtaivang.png' },
    { category: 'Nhẫn cưới', image: '/imgSearchTrendy/nhancuoi.png' },
    { category: 'Đồng hồ', image: '/imgSearchTrendy/dongho.png' },
    { category: 'Lắc vòng tay', image: '/imgSearchTrendy/lacvongtay.png' },
    { category: 'Nhẫn ECZ', image: '/imgSearchTrendy/nhanecz.png' },
    // Add more image objects as needed
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const SearchTrendy = () => {
    return (
        <div className="bg-customWhite">
            <h1 className="text-left ml-12 text-xl font-bold mb-4 text-customBlue">Xu hướng tìm kiếm</h1>
            <Carousel
                responsive={responsive}
                containerClass="flex justify-center"
                itemClass="p-5"
                swipeable={true}
                draggable={true}
                showDots={true}
                autoPlaySpeed={1000}
            >
                {imageList.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.image} alt={item.category} className="rounded-full h-28 w-28" />
                        <p className="text-center mt-2">{item.category}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SearchTrendy;
