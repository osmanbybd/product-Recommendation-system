import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <>
        <div className='bg-[#687FE5] sticky top-0 z-10'>
            <Navbar></Navbar>
        </div>
        <div className='min-h-[48vh]'>
            <Outlet></Outlet>
        </div>

        <Footer></Footer>
        </>
    );
};

export default Root;