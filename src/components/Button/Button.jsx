import { useState } from "react";
import "./Button.css";

const Button = ({ vis, setVis }) => {
  // const [vis, setVis] = useState(false);

  return (
    <div>
      <button
        className={`btn ${vis ? "red" : "green"}`}
        onClick={() => setVis(!vis)}
      >
        {vis ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Button;
