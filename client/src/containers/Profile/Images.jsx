import React from 'react';
import Img1 from './Front.jpg';
import Img2 from './Back.jpg';
import Img3 from './Images/img1.jpg';
import Img4 from './Images/img2.jpg';
import Img5 from './Images/img3.jpg';
import Img6 from './Images/img4.jpg';
import Img7 from './Images/img5.jpg';
import Img8 from './Images/img6.jpg';
import Img9 from './Images/img7.jpg';
import Img10 from './Images/img8.jpg';
import Img11 from './Images/img9.jpg';
import Img12 from './Images/img10.jpg';
import Img13 from './Images/img11.jpg';
import Img14 from './Images/img12.jpg';
import Img15 from './Images/img13.jpg';
import Img16 from './Images/img14.jpg';

import { Carousel } from 'react-bootstrap';

const imageList = [
  { src: Img1, alt: "Services1 Poster", caption: "" },
  { src: Img2, alt: "Services2 Poster", caption: "" },
  { src: Img3, alt: "Image 3", caption: "Reclaim Your Space" },
  { src: Img4, alt: "Image 4", caption: "Junk Removal Experts" },
  { src: Img5, alt: "Image 5", caption: "Eco-Friendly Solutions" },
  { src: Img6, alt: "Image 6", caption: "Residential Junk Removal" },
  { src: Img7, alt: "Image 7", caption: "Reclaim Your Space" },
  { src: Img8, alt: "Image 8", caption: "Fast and Reliable" },
  { src: Img9, alt: "Image 9", caption: "Affordable Prices" },
  { src: Img10, alt: "Image 10", caption: "On-Time Service" },
  { src: Img11, alt: "Image 11", caption: "Eco-Friendly Disposal" },
  { src: Img12, alt: "Image 12", caption: "Your Satisfaction is Our Priority" },
  { src: Img13, alt: "Image 13", caption: "Affordable Pricing" },
  { src: Img14, alt: "Image 14", caption: "We Take It All" },
  { src: Img15, alt: "Image 15", caption: "Cleaning Up Your Space" },
  { src: Img16, alt: "Image 16", caption: "Experts in Junk Removal" }
];

const Images = () => {
  return (
    <>
      {/* The existing images you have */}
      {/* <img src={Img1} alt="Services1" style={{ width: "100%" }} />
      <img src={Img2} alt="Services2" style={{ width: "100%" }} /> */}

      <br />
      <br />
      <br />

      {/* New Carousel Below */}
      <div className="carousel-container">
        <Carousel fade interval={3000} pause="hover" controls={true}>
          {imageList.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={image.src}
                alt={image.alt}
              />
              <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <br />
    </>
  );
};

export default Images;
