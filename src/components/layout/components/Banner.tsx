import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images: string[] = [
  'imgBanner/banner5.jpg',
  'imgBanner/banner6.jpg',
  'imgBanner/banner8.jpg'
];

const Slideshow: React.FC = () => {
  return (
    <>
      <div className="slide-container">
        <Zoom scale={0.4} duration={2000}>
          {images.map((each: string, index: number) => (
            <img key={index} style={{ width: "100%" }} src={each} alt={`Slide ${index + 1}`} />
          ))}
        </Zoom>
      </div>

      {/* grid xếp */}
      <div className="py-8 px-5 bg-customOrange">
        <div className="grid grid-cols-2 items-center">
          <div className="col-span-1 flex justify-center items-center">
            <img src="/imgMain/homePage5.jpg" className="max-w-full h-auto" />
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <img src="/imgMain/homePage4.jpg" className="w-48 h-48 rounded-full" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/imgMain/homePage2.jpg" className="max-w-full h-48" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/imgMain/homePage3.jpg" className="max-w-full h-48 mt-7" />
            </div>
            <div className="flex justify-center items-center">
              <img src="/imgMain/homePage4.jpg" className="w-48 h-48 rounded-full" />
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

      

    </>

  );
};

export default Slideshow;
