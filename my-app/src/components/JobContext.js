
import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'New York, NY',
      type: 'Full-time',
      experienceLevel: 'Mid-Level',
      salary: '100,000 USD',
      description: 'Develop and maintain software applications.'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'Remote',
      type: 'Contract',
      experienceLevel: 'Junior',
      salary: '60,000 USD',
      description: 'Build responsive and user-friendly web interfaces.'
    }
  ]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [postedJobs, setPostedJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
    setPostedJobs([...postedJobs, job]);
  };

  const applyForJob = (jobId) => {
    const jobToApply = jobs.find((job) => job.id === jobId);
    if (jobToApply && !appliedJobs.includes(jobToApply)) {
      setAppliedJobs([...appliedJobs, jobToApply]);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, applyForJob, appliedJobs, postedJobs }}>
      {children}
    </JobContext.Provider>
  );
};
