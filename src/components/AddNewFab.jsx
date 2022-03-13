import { useDispatch } from "react-redux";
import { uiOpenModalAction } from "../actions/ui";
import style from "./fab.module.css";
const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClickNew = () => {
    dispatch(uiOpenModalAction());
  };

  return (
    <button className={`btn btn-primary ${style.fab}`} onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNewFab;
