import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import { calendarClearEventsAction } from "../actions/calendar";

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(calendarClearEventsAction());
  };
  return (
    <div className="navbar navbar-dark bg-dark mb-4 p-2">
      <span className="navbar-brand">{name}</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span className="mx-1">Log Out</span>
      </button>
    </div>
  );
};

export default Navbar;
