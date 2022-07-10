import Container from "./components/Container/Container.styled";
import Header from "./components/Header/Header.styled";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";

import "./app.css";

import { useState } from "react";

function App() {
  const [vis, setVis] = useState(false);
  const [task, setTask] = useState("");
  const [date, setdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("task added");
  };

  const handleClear = (e) => {
    e.preventDefault();
    console.log("task deleted");
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
            <Form handleSubmit={handleSubmit} handleClear={handleClear} />
          </main>
        )}
      </Container>
    </div>
  );
}

export default App;
