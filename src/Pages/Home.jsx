import React from 'react';
import BannerSlider from '../Components/BannerSlider';
import EventHighlights from '../Components/EventHighlights';
import VolunteerNeedsNow from '../Components/VolunteerNeedsNow';
import TestimonialsStatic from '../Components/TestimonialsStatic';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <EventHighlights></EventHighlights>
            <TestimonialsStatic></TestimonialsStatic>
        </div>
    );
};

export default Home;