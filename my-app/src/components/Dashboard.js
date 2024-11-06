
import React, { useContext } from 'react';
import { JobContext } from './JobContext';
import './Dashboard.css';

const Dashboard = () => {
  const { appliedJobs, postedJobs } = useContext(JobContext);

  return (
    <div className="dashboard-container">
      {/* User Profile Section */}
      <div className="user-profile">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="user-avatar"
        />
        <h2>John Doe</h2>
        <p>Email: johndoe@example.com</p>
      </div>

      {/* Job Stats Section */}
      <div className="job-stats">
        <div className="stat-item">
          <h3>Jobs Applied</h3>
          <p>{appliedJobs.length}</p>
        </div>
        <div className="stat-item">
          <h3>Jobs Posted</h3>
          <p>{postedJobs.length}</p>
        </div>
      </div>

      {/* Applied and Posted Job Lists */}
      <div className="additional-content">
        <h3>Applied Jobs</h3>
        <ul>
          {appliedJobs.map((job) => (
            <li key={job.id}>{job.title} at {job.company}</li>
          ))}
        </ul>

        <h3>Posted Jobs</h3>
        <ul>
          {postedJobs.map((job) => (
            <li key={job.id}>{job.title} at {job.company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
