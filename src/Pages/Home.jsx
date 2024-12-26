import React from 'react';
import BannerSlider from '../Components/BannerSlider';
import EventHighlights from '../Components/EventHighlights';
import VolunteerNeedsNow from '../Components/VolunteerNeedsNow';
import TestimonialsStatic from '../Components/TestimonialsStatic';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Volunteer Platform</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <EventHighlights></EventHighlights>
            <TestimonialsStatic></TestimonialsStatic>

        </div>
    );
};

export default Home;