import Swal from "sweetalert2";
import { fetchToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const startAddEvent = (newEvent) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const res = await fetchToken("events", newEvent, "POST");
      const response = await res.json();
      if (response.ok) {
        newEvent.id = response.event.id;
        newEvent.user = {
          _id: uid,
          name,
        };
        dispatch(addEventAction(newEvent));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const addEventAction = (event) => ({
  type: types.calendarAddEvent,
  payload: event,
});

export const setActiveEventAction = (event) => ({
  type: types.calendarSetActiveEvent,
  payload: event,
});

export const clearActiveEventAction = () => ({
  type: types.calendarClearActiveEvent,
});

export const startCalendarUpdateEvent = (event) => {
  return async (dispatch) => {
    try {
      const res = await fetchToken(`events/${event.id}`, event, "PUT");
      const response = await res.json();
      if (response.ok) {
        dispatch(calendarUpdateEventAction(event));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const calendarUpdateEventAction = (event) => ({
  type: types.calendarUpdateEvent,
  payload: event,
});

export const calendarDeleteEventAction = () => ({
  type: types.calendarDeleteEvent,
});

export const startEventLoading = () => {
  return async (dispatch) => {
    try {
      const res = await fetchToken("events");
      const response = await res.json();
      if (response.ok) {
        // Convert to date format start and end atributes
        const events = prepareEvents(response.events);
        dispatch(calendarEventLoadedAction(events));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const calendarEventLoadedAction = (events) => ({
  type: types.calendarEventLoaded,
  payload: events,
});
