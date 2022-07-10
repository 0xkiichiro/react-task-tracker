import Container from "./components/Container/Container.styled";
import Header from "./components/Header/Header.styled";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./app.css";

import { useState, useEffect } from "react";

function App() {
  const [vis, setVis] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editTask, setEditTask] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [datePlaceholder, setDatePlaceholder] = useState();
  const [dummyKey, setDummyKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      key: new Date().getTime(),
      taskName: task,
      taskDate: date,
    };

    setTaskList([newTask, ...taskList]);
    // setTask("");
    // setDate("");
    // console.log(taskList);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleClear = (e) => {
    e.preventDefault();
    setTaskList([]);
    console.log("tasks deleted");
  };

  const transferId = (e) => {
    // console.log(e);
    // console.log(taskList.filter((item) => item.key == e)[0].taskName);
    setPlaceholder(taskList.filter((item) => item.key == e)[0].taskName);
    setDatePlaceholder(taskList.filter((item) => item.key == e)[0].taskDate);
    setDummyKey(taskList.filter((item) => item.key == e)[0].key);
  };

  return (
    <div className="App">
      <Container>
        <Header>
          <h1>Task Tracker</h1>
          <Button vis={vis} setVis={setVis} />
        </Header>
        {vis && (
          <main>
            <Form
              handleSubmit={handleSubmit}
              handleClear={handleClear}
              setDate={setDate}
              setTask={setTask}
            />
          </main>
        )}
        <div className="modal-container">
          {editTask && (
            <Modal
              taskList={taskList}
              setTaskList={setTaskList}
              placeholder={placeholder}
              datePlaceholder={datePlaceholder}
              setPlaceholder={setPlaceholder}
              setDatePlaceholder={setDatePlaceholder}
              dummyKey={dummyKey}
              setDummyKey={setDummyKey}
              editTask={editTask}
              setEditTask={setEditTask}
            />
          )}
        </div>
        <div className="task-list-container">
          {taskList.map((item) => {
            return (
              <li key={item.key} className="list-item" id={item.key}>
                <div className="task-data-div">
                  <p>{item.taskName}</p>
                  <p>{item.taskDate}</p>
                </div>
                <div className="icons-div">
                  <AiOutlineEdit
                    className="icon icon-edit"
                    onClick={(e) => {
                      setEditTask(true);
                      transferId(e.target.closest("li").id);
                    }}
                  />
                  <AiOutlineDelete
                    className="icon icon-delete"
                    onClick={(e) => {
                      setTaskList(
                        taskList.filter(
                          (item) =>
                            item.key.toString() !== e.target.closest("li").id
                        )
                      );
                    }}
                  />
                </div>
              </li>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
