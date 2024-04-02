import ParentComponent from "./components/parent";
import mitt from "mitt";

export const emitter = mitt();
/*
Use Case:
  If you need to share some state between components, usually done through a parent.
General Pattern: 
  Two components need to communicate but without use of parent component
Overview:
  Sibling emmit events and other subscribe to get update requests.

*/
function App() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;
