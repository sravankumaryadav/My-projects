import React, { useContext } from 'react';
import { JobContext } from './JobContext';
import './JobList.css';

const JobList = () => {
  const { jobs, applyForJob } = useContext(JobContext);

  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.type}</p>
            <button onClick={() => applyForJob(job.id)}>Apply</button>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;





