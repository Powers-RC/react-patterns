import { useState } from "react";
import "./App.css";
import Counter from "./counter";
/*
Use Case:
  If you have multiple instances of the component that modify some internal state.
  React will not be able to tell the difference is surrounded by the same parent. 
  So each component will not have a unique state.  Two things you can do

  1. Update the parent to be unique for each component. Will see they are in different locations in the tree and rerender new component.
  2. Use key to identify a component is unique from other instances.

General Pattern: 
  A key changes causes a component or element to rerender completely from scratch.
Overview:
*/
function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span> <Counter key="shirt"/>
        </>
      ) : (
        <>
          <span>Shoes counts: </span> <Counter key="shoes"/>
        </>
      )}
      <br />
      <input type="number" key={changeShirts ? "shirt": "shoes"} />
      <br/>
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
