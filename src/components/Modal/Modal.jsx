import { useState } from "react";
import { MdDone } from "react-icons/md";
import "./Modal.css";

const Modal = ({
  dummyKey,
  setDummyKey,
  taskList,
  setTaskList,
  placeholder,
  setPlaceholder,
  datePlaceholder,
  setDatePlaceholder,
  setEditTask,
}) => {
  const handleEdit = (e) => {
    e.preventDefault();
    const editedItem = taskList.filter((item) => item.key == dummyKey)[0];
    const restArray = taskList.filter((item) => item.key != dummyKey);
    editedItem.taskName = placeholder;
    editedItem.taskDate = datePlaceholder;

    setTaskList([editedItem, ...restArray]);
    setPlaceholder("");
    setDatePlaceholder("");
    setEditTask(false);
  };

  return (
    <div>
      <form className="list-item">
        <input
          className="input-text"
          type="text"
          id={dummyKey}
          value={placeholder}
          placeholder={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
        />
        <div className="button-container">
          <input
            className="input-date"
            type="date"
            value={datePlaceholder}
            onChange={(e) => setDatePlaceholder(e.target.value)}
          />
          <button className="done-btn" onClick={(e) => handleEdit(e)}>
            <MdDone />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
