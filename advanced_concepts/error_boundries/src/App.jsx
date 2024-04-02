import "./App.css";
import { Child } from "./child";
import { ErrorBoundry } from "./error-boundry";

/*
Use Case:
  An error occurs in child component, then whole application goes white.
General Pattern: 
  ErrorBoundies: Class component with a fallback component in them.
Overview:
  Create an error boundry class. Create a state which holds the status of the error.
  Return the fallback component (which is passed as a prop) or the children of the ErrorBoundry.
  Use getDerivedStateFromError to update the state of the ErrorBoundry class. You can use the 
  componentDidCatch to log the error.

  ** Note only catches error triggered in the process of render the app
*/

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundry fallback={<h2>Error at child level</h2>}>
        <Child />
      </ErrorBoundry>
    </>
  );
}

export default App;
