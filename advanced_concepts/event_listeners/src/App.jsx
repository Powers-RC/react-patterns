import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

// onClick: Uses the bubbling event phase, starting from the triggered component up.
// onClickCapture: Uses the capture event phase, starting from the document down.

// e.stopPropagation prevents from further propagation in (capture|bubble phases)
// e.stopImediatePropagation if multiples listeners attached, prevents other from same event being called
// e.preventDeafult prevents default action from being taken

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClickCapture={() => console.log("outer div")}
      style={{ position: "absolute", marginTop: "200px" }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div
      className="alert"
      onClickCapture={() => {
        onClose();
        console.log("inner div");
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-holder")
  );
};

export default App;
