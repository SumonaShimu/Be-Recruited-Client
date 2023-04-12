import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const FeatureJob = ({jobs}) => {
    
    
    let newjobs=jobs.slice(0,4);
    const [current,setJobs]=useState(newjobs);

    const showMore=()=>{
        setJobs(jobs);
    }

    return (
        <div className='my-10 text-center'>
            <h1 className='title'>Featured Jobs</h1>
            <p className='mute'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='space grid md:grid-cols-2 gap-4'>
            {current.map(job=><JobCard key={job.id} job={job}></JobCard>)}
            </div>
            <button onClick={showMore} className={`w-[50%] rounded-full ${current.length==6 ? 'hidden' : ''}`}>Show More</button>
        </div>
    );
};

export default FeatureJob;