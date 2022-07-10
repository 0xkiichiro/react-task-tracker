import { useState } from "react";

const Modal = ({
  placeholder,
  setPlaceholder,
  datePlaceholder,
  setDatePlaceholder,
}) => {
  return (
    <div>
      <form>
        <input type="text" placeholder={placeholder} />
        <input type="date" value={datePlaceholder} />
        <div className="button-container">
          <button className="btn">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
