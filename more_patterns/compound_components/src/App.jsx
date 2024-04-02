import Card from "./components/card";

/*
Use Case:
  If you have a component consisting of many sub-components that are displayed or rendered based on some props.
  This can turn into hell of nested props.
General Pattern: 
  Decompose this components into subcomponents then composing them back together
Overview:
  export the general component and attach additional properties to the main component for the other sub-components

*/
function App() {
  return (
    <Card test="Value">
      <Card.Header>
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        He hid under the covers hoping that nobody would notice him there. It
        really didn't make much sense since it would be obvious to anyone who
        walked into the room there was someone hiding there, but he still held
        out hope. He heard footsteps coming down the hall and stop in front in
        front of the bedroom door. He heard the squeak of the door hinges and
        someone opened the bedroom door. He held his breath waiting for whoever
        was about to discover him, but they never did.
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
}

export default App;
