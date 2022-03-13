import React from "react";
import { useDispatch } from "react-redux";
import { calendarDeleteEventAction } from "../actions/calendar";
import styles from "./fab.module.css";
const DeleteEventFab = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(calendarDeleteEventAction());
  };
  return (
    <button
      className={`btn btn-danger ${styles.fab_danger}`}
      onClick={handleDelete}
    >
      <i className="fas fa-trash-alt "></i>
      <span>
        <strong className="mx-1">Delete Event</strong>
      </span>
    </button>
  );
};

export default DeleteEventFab;
