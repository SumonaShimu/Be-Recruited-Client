import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-bar flex flex-col md:flex-row justify-between '>
            <div className='logo-name flex'>
                <img src="logo.png" alt="" />
                <h1>BeRecruited</h1>
            </div>
            <div className='flex flex-col md:flex-row  gap-4 items-center mute'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='rounded-full my-4'>Start Applying</button>
        </div>
    );
};

export default Navbar;