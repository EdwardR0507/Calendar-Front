import React from "react";

const CalendarEvent = ({ event }) => {
  const {
    title,
    user: { name },
  } = event;

  return (
    <div className="d-flex flex-column">
      <strong>{title}</strong>
      <span> - {name}</span>
    </div>
  );
};

export default CalendarEvent;
