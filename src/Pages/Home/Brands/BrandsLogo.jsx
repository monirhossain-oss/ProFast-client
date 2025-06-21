import React from 'react';
import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/amazon_vector.png'
import logo2 from '../../../assets/amazon.png'
import logo3 from '../../../assets/casio.png'
import logo4 from '../../../assets/moonstar.png'
import logo5 from '../../../assets/randstad.png'
import logo6 from '../../../assets/start.png'
import logo7 from '../../../assets/start-people 1.png'
const logos= [logo1,logo2,logo3,logo4,logo5,logo6,logo7]

const BrandsLogo = () => {
    return (
        <div className="w-full p-2">
            <Marquee
                speed={60}
                gradient={false}
                pauseOnHover={true}
                direction="left"  
            >
                {logos.map((logo, index) => (
                    <div key={index} className="mx-8">
                        <img src={logo} alt={`Brand Logo ${index + 1}`} className="h-6 object-contain" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BrandsLogo;