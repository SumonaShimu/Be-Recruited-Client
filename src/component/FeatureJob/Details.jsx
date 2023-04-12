import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faLocationPin, faPhone, faCalendarDays, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../fakedb';

const Details = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    const job = jobs.find(item => item.id == id);
    const { description, responsibility, education, experience, salary, title, location, email, phone } = job;
    return (
        <div>
            <div className='header'>
                <h1 className='text-center'>Job Details</h1>
            </div>
            <div className='details-container grid md:grid-cols-2 gap-4 p-10'>
                <div>
                    <p className='mute'>
                        <span className='font-bold text-slate-900'>Job Description: </span>{description}</p>
                    <p className='mute'>
                        <span className='font-bold text-slate-900'>Job Responsibility: </span>{responsibility}</p>
                    <p className='mute'>
                        <span className='font-bold text-slate-900'>Educational Requirements: </span>{education}</p>
                    <p className='mute'>
                        <span className='font-bold text-slate-900'>Experiences: </span>{experience}</p>
                </div>
                <div className='bg-orange-100 p-10 rounded-xl'>
                    <h2>Job Details</h2>
                    <p className='mute'>
                        <FontAwesomeIcon icon={faHandHoldingDollar} className="icon"/>
                        <span className='font-bold text-slate-900'>Salary: </span>{salary}</p>
                    <p className='mute'>
                        <FontAwesomeIcon icon={faCalendarDays} className="icon"/>
                        <span className='font-bold text-slate-900'>Job Title: </span>{title}</p>
                    <h2>Contact Information</h2>
                    <p className='mute'>
                        <FontAwesomeIcon icon={faPhone} className="icon"/>
                        <span className='font-bold text-slate-900'>Phone: </span>{phone}</p>
                    <p className='mute'>
                        <FontAwesomeIcon icon={faLocationArrow} className="icon"/>
                        <span className='font-bold text-slate-900'>Email: </span>{email}</p>
                    <p className='mute'>
                        <FontAwesomeIcon icon={faLocationPin} className="icon"/>
                        <span className='font-bold text-slate-900'>Address: </span>{location}</p>
                    <button onClick={()=>addToDb(id)} className='rounded-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;