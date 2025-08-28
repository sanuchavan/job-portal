import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Job Portal</h1>
      <div>
        <Link to="/" className="mr-4">Jobs</Link>
        <Link to="/post">Post Job</Link>
        <Link to="/login" className="ml-4">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
