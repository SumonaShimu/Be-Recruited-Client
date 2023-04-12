import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { logo, title, company, type, location, duration, salary, id } = job;

    return (
        <div className='grid grid-cols-5 rounded-xl border-2 items-center p-4 mb-4'>

            <div className='bg-orange-100 bg-opacity-50 h-[150px] w-[150px] flex items-center p-3 rounded-xl'><img className='w-[100%]' src={logo} alt="" /> </div>

            <div className='col-span-3'>
                <h3 className='font-bold text-2xl'>{title}</h3>
                <div className='mute'>
                    <p>{company}</p>
                    <p className='btn-mute inline-block'>{type}</p>
                    <p className='btn-mute inline-block'>{duration}</p>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>

            <Link to={`/details/${id}`}><button className='rounded-full'>View Details</button></Link>

        </div>
    );
};

export default AppliedJob;