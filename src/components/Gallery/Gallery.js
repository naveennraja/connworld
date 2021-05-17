import React, { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.css';
import image1 from '../../images/carousel/1.jpg';
import image2 from '../../images/carousel/2.jpg';
import image3 from '../../images/carousel/3.jpg';
import image4 from '../../images/carousel/4.jpg';
import image5 from '../../images/carousel/5.jpg';
import image6 from '../../images/carousel/6.jpg';

const Gallery = () => {
  const [carouselChildren, setcarouselChildren] = useState([]);
  const imageList = [image1, image2, image3, image4, image5, image6];
  useState(() => {
    setcarouselChildren(imageList);
  }, [imageList]);
  return (
    <>
      <Carousel
        showArrows={false}
        animationHandler={'fade'}
        swipeable={true}
        autoPlay={true}
        infiniteLoop
        transitionTime={2000}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        centerModes>
        {carouselChildren.map((idx) => (
          <div
            className='galleryImage'
            style={{
              backgroundImage: `url(${idx})`
            }}
            key={idx}></div>
        ))}
      </Carousel>
    </>
  );
};

export default Gallery;
