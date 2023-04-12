import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className=''>
                <h1 className='banner-heading'>One Step<br/> Closer To Your<br/><span className='text-orange-500' >Dream Job</span></h1>
                <p className='mute mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='rounded-full'>Get Started</button>
            </div>
            <div className='rounded'>
                <img className='rounded-xl' src="https://raw.githubusercontent.com/SumonaShimu/ass-09-img/main/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;