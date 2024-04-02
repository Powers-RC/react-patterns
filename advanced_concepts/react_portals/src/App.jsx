import { useState } from "react";
import { createPortal } from 'react-dom';
import "./App.css";

/*
Use Case:
  If you want to render some content outside a root or current node.
General Pattern: 
  Import createPortal from react-dom, return hook with content and ref/location 
Overview:
  Generally used to display a model or like. You will need to create a separate dive in the root of the application 
  where this content can be rendered. **Note if this portal component is rendered inside other content, the onClick 
  event can bubble up to an unintended listener outside the modal.
*/
function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
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

  return (
    createPortal(
      <div className="alert" onClick={onClose}>
        {children}
      </div>,
      document.querySelector("#modal-holder")
    )
  );
};

export default App;
