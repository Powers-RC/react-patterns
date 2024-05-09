import { useState, useRef, useEffect } from "react";
import "./App.css";

/*
Use Case:
  When you have logic that is responsible for modifying the layout of a component based on some state
General Pattern: 
  Replace useEffect hooks with useLayoutEffect
Overview:
  React behaves in an asyncronous nature which can cause rendering issues. For example, if the state changes and you 
  have conditional logic build around that, as well a hooks that calculates a value based on that state you will see 
  issues. When the state changes react will immediately try and render that conditional logic without calculating the
  value which uses that state. So it will trigger multiple renders and will appear to lag. To get around this call
  useLayoutEffect to tell react to wait to render the conditional logic until the calculation has been preformed.
*/
function App() {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 100) {
    //Do something
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      {show && (
        <div
          className="tooltip"
          style={{
            top: `${top}px`,
          }}
        >
          Some text ...
        </div>
      )}
    </>
  );
}

export default App;
