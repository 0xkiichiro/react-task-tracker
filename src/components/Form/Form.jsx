import "./Form.css";

const Form = ({ task, date, setTask, setDate, handleClear, handleSubmit }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="button-container">
        <button className="btn submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
        <button className="btn clear" onClick={(e) => handleClear(e)}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
