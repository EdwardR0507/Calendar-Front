import { types } from "../types/types";

export const addEventAction = (event) => ({
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
