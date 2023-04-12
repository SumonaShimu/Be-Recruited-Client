import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobs } from '../fakedb';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const allJobs=useLoaderData();
    const appliedJobs=getAppliedJobs();
    const appliedJobsId=Object.keys(appliedJobs)
    const jobs=allJobs.filter(job=>{
        if(appliedJobsId.find((id)=>{
            if(id==job.id) return true;
            else false;
        }
        )) return job;
    })
    // console.log(jobs)
    return (
        <div className='min-h-[80vh]'>
            <div className='header'>
                <h1 className='text-center'>Applied Jobs</h1>
            </div>
            {jobs.map(job=><AppliedJob job={job}></AppliedJob>)}
        </div>
    );
};

export default AppliedJobs;