import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-bar flex flex-col md:flex-row justify-between '>
            <div className='logo-name flex'>
                <img src="https://raw.githubusercontent.com/SumonaShimu/ass-09-img/main/logo.png" alt="" />
                <h1>BeRecruited</h1>
            </div>
            <div className='flex flex-col md:flex-row  gap-4 items-center mute'>
                <Link to="/" className='ehover'>Home</Link>
                <Link to="/statistics" className='ehover'>Statistics</Link>
                <Link to="/appliedjobs" className='ehover'>Applied Jobs</Link>
                <Link to="/blog" className='ehover'>Blog</Link>
            </div>
            <Link to='/'><button className='rounded-full my-4'>Start Applying</button></Link>
        </div>
    );
};

export default Navbar;