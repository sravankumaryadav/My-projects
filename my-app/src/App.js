import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Postjob from "./components/Postjob";
import { JobProvider } from "./components/JobContext";

const App = () => {
  return (
    <div>
      <JobProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postjob" element={<Postjob />} />
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </div>
  );
};

export default App;


