import "./Form.css";

const Form = ({ handleSubmit, handleClear }) => {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" class="input" placeholder="Enter task" />
      <input type="date" class="input" />
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
