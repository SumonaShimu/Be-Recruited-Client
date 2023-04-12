import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobs } from '../fakedb';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const allJobs=useLoaderData();
    const appliedJobs=getAppliedJobs();
    const appliedJobsId=Object.keys(appliedJobs)
    
    let [jobs,setJobs]=useState([]);
    useEffect(()=>{
        const newjobs=allJobs.filter(job=>{
            if(appliedJobsId.find((id)=>{
                if(id==job.id) return true;
                else false;
            }
            )) return job;
        })
        setJobs(newjobs);
    },[])
    
    const sortByRemote=()=>{
        const remoteJobs=jobs.filter(job=>job.type=="Remote")
        setJobs(remoteJobs);
    }
    const sortByOnsite=()=>{
        const onsiteJobs=jobs.filter(job=>job.type=="Onsite")
        setJobs(onsiteJobs);
    }

    // console.log(jobs)

    return (
        <div className='min-h-[80vh]'>
            <div className='header flex flex-col gap-4'>
                <h1 className='text-center'>Applied Jobs</h1>
                <div className='flex gap-5'>
                <button onClick={sortByRemote}>Remote</button>
                <button onClick={sortByOnsite}>Onsite</button>
                </div>
            </div>
            {jobs.map(job=><AppliedJob job={job}></AppliedJob>)}
        </div>
    );
};

export default AppliedJobs;