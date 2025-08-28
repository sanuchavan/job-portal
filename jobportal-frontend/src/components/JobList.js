import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-2 border p-3 rounded">
            <Link to={`/jobs/${job.id}`} className="text-blue-600">
              {job.title} - {job.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
