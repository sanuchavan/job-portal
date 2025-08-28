import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl">{job.title}</h2>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Description:</b> {job.description}</p>
    </div>
  );
};

export default JobDetails;
