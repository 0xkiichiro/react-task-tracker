import Container from "./components/Container/Container.styled";
import Header from "./components/Header/Header.styled";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";

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
    console.log(taskList);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleClear = (e) => {
    e.preventDefault();
    setTaskList([]);
    console.log("tasks deleted");
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
        <div className="task-list-container">
          {taskList.map((item) => {
            return (
              <li key={item.key} className="list-item" id={item.key}>
                <div className="task-data-div">
                  <p>{item.taskName}</p>
                  <p>{item.taskDate}</p>
                </div>
                <div className="icons-div">
                  <AiOutlineEdit className="icon icon-edit" />
                  <AiOutlineDelete
                    className="icon icon-delete"
                    onClick={(e) => {
                      setTaskList(
                        taskList.filter(
                          (item) => item.id !== e.target.closest("li").id
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
