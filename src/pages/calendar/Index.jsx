import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../ui/Navbar";
import CalendarEvent from "../../components/CalendarEvent";
import CalendarModal from "../../components/CalendarModal";
import { uiOpenModalAction } from "../../actions/ui";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    user: {
      _id: "123",
      name: "Edward",
    },
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = "red";
  const style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    opacity: 0.8,
    color: "black",
    border: "0px",
  };
  return {
    style,
  };
};

const MyCalendar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.ui);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (e) => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  return (
    <>
      <Navbar />
      <CalendarModal isOpen={isOpen} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};

export default MyCalendar;
