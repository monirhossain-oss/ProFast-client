import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../Services/OurServices';
import Brands from '../Brands/Brands';
import FeaturesList from '../Features/FeaturesList';
import HeroCard from '../HeroCard/HeroCard';
import HowToWork from '../HowToWork/HowToWork';
import CustomerHero from '../CustomerReviewService/CustomerHero';
import FaqHero from '../FAQSection/FaqHero';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWork></HowToWork>
            <OurServices></OurServices>
            <Brands></Brands>
            <FeaturesList></FeaturesList>
            <HeroCard></HeroCard>
            <CustomerHero></CustomerHero>
            <FaqHero></FaqHero>
        </div>
    );
};

export default Home;