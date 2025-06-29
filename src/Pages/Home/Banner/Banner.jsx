import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner1.png'
import bannerImg2 from '../../../assets/banner2.png'
import bannerImg3 from '../../../assets/banner3.png'

const Banner = () => {
    return (
        <Carousel className='mt-8 m-4' autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={bannerImg1} />
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
        </Carousel>
    );
};

export default Banner;