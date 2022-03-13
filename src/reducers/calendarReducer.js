import moment from "moment";
import { types } from "../types/types";
const initialState = {
  events: [
    {
      id: new Date().getTime(), // Provitional id
      title: "All Day Event",
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      bgColor: "#fafafa",
      notes: "This is a note",
      user: {
        _id: "123",
        name: "Edward",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.calendarSetActiveEvent:
      return {
        ...state,
        activeEvent: payload,
      };
    case types.calendarAddEvent:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case types.calendarClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    case types.calendarUpdateEvent:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === payload.id ? payload : event
        ),
      };
    case types.calendarDeleteEvent:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== state.activeEvent.id
        ),
        activeEvent: null,
      };
    default:
      return state;
  }
};
