import React from 'react';
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Layout = () => {
    return (
        <div>
            <div className='min-h-[80vh] max-w-[1200px] mx-auto' >
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;