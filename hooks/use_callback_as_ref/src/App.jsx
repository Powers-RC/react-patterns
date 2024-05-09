import { useCallback, useEffect, useRef, useState } from "react";

/*
Use Case: 
  Attach ref to element but ref doesn't exist on mount due to conditional logic
General Pattern: 
  Move logic to useCallback, create check if doesn't exist, create and manually assign ref to element. 
Overview:
  Here if we create a ref and attach if to the input, on the inital render the show is false, if we have a useEffect
  that doesn stuff with the ref it will error because the component isn't mounted. So we must can try useCallback to
  preform this logic once mounted, and manually attach the ref.
*/
function App() {
  const [show, setShow] = useState(false);
  const realInputRef = useRef(null);
  const inputRef = useCallback((input) => {
    // Manually attching ref to component. 
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Switch</button>
      {show && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
