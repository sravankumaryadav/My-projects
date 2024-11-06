
import React from "react";
import "./Home.css";
import JobList from "./JobList";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Job Portal</h1>
      <JobList />
    </div>
  );
};

export default Home;


