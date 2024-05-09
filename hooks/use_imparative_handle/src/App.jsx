import { useRef } from "react";
import "./App.css";
import { Input } from "./input";
/*
Use Case: 
  When you have to interact with the dom elements directly (imparative|uncontrolled manor) and you would like to
  restrict access to how one can interact with it, use useImperativeHandle
General Pattern: 
  Component takes ref as prop, pass ref to hook `useImparativeHandle`, specify return object with methods|attributes
Overview:
*/
function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;
