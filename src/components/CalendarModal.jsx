import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import ModalLayout from "./ModalLayout";
import DateTimePicker from "react-datetime-picker";
import Swal from "sweetalert2";
import { uiCloseModalAction } from "../actions/ui";

const now = moment().minutes(0).seconds(0).add(1, "hours");

const nowPlusOne = now.clone().add(1, "hours");

const CalendarModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: now.toDate(),
    end: nowPlusOne.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const handleStartDateChange = (e) => {
    setFormValues({ ...formValues, start: e });
    setDateStart(e);
  };

  const handleEndDateChange = (e) => {
    setFormValues({ ...formValues, end: e });
    setDateEnd(e);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the dates
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire({
        title: "Error",
        text: "End date must be after start date",
        icon: "error",
      });
    }
    if (title.trim() === "") {
      return Swal.fire({
        title: "Error",
        text: "Title cannot be empty",
        icon: "error",
      });
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(uiCloseModalAction());
  };

  return (
    <ModalLayout open={isOpen} onClose={handleClose}>
      <h1 className="text-center"> New Event </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Start date and time</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>End date and time</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            minDate={dateStart}
            value={dateEnd}
            className="form-control"
          />
        </div>
        <hr />
        <div className="form-group">
          <label>Title and notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Event Title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            A short description
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block w-100 my-3"
        >
          <i className="far fa-save"></i>
          <span> Save </span>
        </button>
      </form>
    </ModalLayout>
  );
};

export default CalendarModal;
