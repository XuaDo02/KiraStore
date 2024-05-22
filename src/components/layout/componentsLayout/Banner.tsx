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
      {/* <div className='mt-5'>
      <SearchTrendy/>
      </div> */}
    </>

  );
};

export default Slideshow;
