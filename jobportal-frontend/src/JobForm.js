import React, { useState } from "react";
import api from "../api";

const JobForm = () => {
  const [job, setJob] = useState({ title: "", description: "", location: "" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/jobs", job).then(() => alert("Job posted successfully!"));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" onChange={handleChange} className="block mb-2 border p-2"/>
        <input name="location" placeholder="Location" onChange={handleChange} className="block mb-2 border p-2"/>
        <textarea name="description" placeholder="Description" onChange={handleChange} className="block mb-2 border p-2"/>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Post Job</button>
      </form>
    </div>
  );
};

export default JobForm;
