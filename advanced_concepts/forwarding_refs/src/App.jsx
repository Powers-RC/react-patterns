import { useRef } from "react";
import "./App.css";
import Input from "./Input";

/*
Use Case:
  If you have a parent component and you a breaking it apart into custom components. If one component needs a reference
  passed from the parent, this is how you do that.
General Pattern: 
  Take ref as prop to component, pass to jsx parent ref prop. Then wrap exported component in forwardRef
Overview:
  import forwardRef from react, create ref in parent and pass it as prop to custom component. In custom component accept
  all other props, then ref. Export custom component wrapped in forwardRef function that take the component. 
*/
function App() {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef}/>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default App;
