import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/jobs", {
        title,
        description,
      });
      alert("Job posted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error posting job");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <h2>Post a Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;

