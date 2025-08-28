import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/post-job" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
