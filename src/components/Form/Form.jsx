import "./Form.css";

const Form = () => {
  return (
    <form className="form-container">
      <input type="text" class="input" placeholder="Enter task" />
      <input type="date" class="input" />
    </form>
  );
};

export default Form;
