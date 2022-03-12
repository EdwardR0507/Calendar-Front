import ReactDom from "react-dom";
import style from "./modal.module.css";
const ModalLayout = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={style.overlay} onClick={onClose} />
      <div className={style.modal}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalLayout;
