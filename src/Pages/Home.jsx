import React from 'react';
import BannerSlider from '../Components/BannerSlider';
import EventHighlights from '../Components/EventHighlights';
import TestimonialsCarousel from '../Components/TestimonialsCarousel';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <EventHighlights></EventHighlights>
            <TestimonialsCarousel></TestimonialsCarousel>
        </div>
    );
};

export default Home;