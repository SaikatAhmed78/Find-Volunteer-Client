import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav><Navbar /></nav>
            <div className='w-11/12 mx-auto min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
            <footer><Footer /></footer>
        </div>
    );
};

export default MainLayout;
