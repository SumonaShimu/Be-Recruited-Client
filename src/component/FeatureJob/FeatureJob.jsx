import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const FeatureJob = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div className='my-10 text-center'>
            <h1 className='title'>Featured Jobs</h1>
            <p className='mute'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='space grid md:grid-cols-2 gap-4'>
               {jobs.map(job=><JobCard key={job.id} job={job}></JobCard>)}
            </div>
            <button className='w-[50%] rounded-full'>Show More</button>
        </div>
    );
};

export default FeatureJob;