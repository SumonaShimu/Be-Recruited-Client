import React from 'react';

const Job = ({job}) => {
    const {logo,title,company,type,location,duration,salary}=job;
    return (
        <div className='card bg-orange-100 bg-opacity-50 rounded-xl bg'>
            <div>
            <img className='card-img' src={logo} alt="" />
            <h3 className='font-bold text-2xl'>{title}</h3>
            <div className='mute'>
            <p>{company}</p>
            <p className='btn-mute inline-block'>{type}</p>
            <p className='btn-mute inline-block'>{duration}</p>
            <p>{location}</p>
            <p>{salary}</p>
            </div>
            <button className='rounded-full'>Show Details</button>
            </div>
        </div>
    );
};

export default Job;