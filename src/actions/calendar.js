import { fetchToken } from "../helpers/fetch";
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

export const calendarUpdateEventAction = (event) => ({
  type: types.calendarUpdateEvent,
  payload: event,
});

export const calendarDeleteEventAction = () => ({
  type: types.calendarDeleteEvent,
});
