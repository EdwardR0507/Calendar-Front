import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand mb-0 h1">
        <span className="ml-2">Calendar</span>
      </span>
      <button className="btn btn-outline-danger my-2 my-sm-0">
        <i className="fas fa-sign-out-alt"></i>
        <span className="mx-1">Log Out</span>
      </button>
    </div>
  );
};

export default Navbar;
