import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='w-11/12 mx-auto min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
           <Footer />
        </div>
    );
};

export default MainLayout;
