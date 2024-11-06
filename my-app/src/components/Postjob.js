
import React, { useState, useContext } from 'react';
import { JobContext } from './JobContext';
import './Postjob.css'; 

const Postjob = () => {
  const { addJob } = useContext(JobContext);

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-time');
  const [experienceLevel, setExperienceLevel] = useState('Entry-Level');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      type,
      experienceLevel,
      salary,
      postedDate: new Date().toISOString().split('T')[0],
      description,
    };
    addJob(newJob);


    setTitle('');
    setCompany('');
    setLocation('');
    setType('Full-time');
    setExperienceLevel('Entry-Level');
    setSalary('');
    setDescription('');
  };

  return (
    <form className="postjob-container" onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" required />
      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" required />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>
      <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
        <option>Entry-Level</option>
        <option>Mid-Level</option>
        <option>Senior-Level</option>
        <option>Manager</option>
        <option>Director</option>
      </select>
      <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job Description" required />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default Postjob;
