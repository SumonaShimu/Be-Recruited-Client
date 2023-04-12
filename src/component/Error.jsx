import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-[100%] h-[80vh] text-center'>
            <img className='h-44 w-44 mx-auto mb-10' src="https://raw.githubusercontent.com/SumonaShimu/ass-09-img/main/Error.png" alt="" />
            <h1>Oooops</h1>
            <p>Something went wrong!</p>
            <Link to='/'><button className='rounded-full'>Go Back to Home</button></Link>
        </div>
    );
};

export default Error;