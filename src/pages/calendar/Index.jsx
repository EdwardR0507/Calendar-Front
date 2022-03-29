import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../../components/Navbar";
import CalendarEvent from "../../components/CalendarEvent";
import CalendarModal from "../../components/CalendarModal";
import AddNewFab from "../../components/AddNewFab";
import { uiOpenModalAction } from "../../actions/ui";
import {
  clearActiveEventAction,
  setActiveEventAction,
  startEventLoading,
} from "../../actions/calendar";
import DeleteEventFab from "../../components/DeleteEventFab";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  useEffect(() => {
    dispatch(startEventLoading());
  }, [dispatch]);

  const onDoubleClick = (e) => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (e) => {
    dispatch(setActiveEventAction(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = () => {
    dispatch(clearActiveEventAction());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = uid === event.user._id ? "#367CF7" : "#465660";
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

  return (
    <>
      <Navbar />
      <CalendarModal />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={onSelectSlot}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectedSlot
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />
      {activeEvent && <DeleteEventFab />}
    </>
  );
};

export default MyCalendar;
