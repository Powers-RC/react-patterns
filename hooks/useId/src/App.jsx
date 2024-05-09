import Form from "./input";

/*
Use Case:
  useId are useful when constructing a unique identifier for html elements
General Pattern: 
  Store useId identifier and use template literal string to add element description to it
Overview:
  Best practive to construct unique identifier for elements, some might use Math.random but this can
  cause issues if you decide to use server side rendering. 

TODO: Compare keys and useId
*/
function App() {
  return (
    <>
      <Form />
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Form />
    </>
  );
}

export default App;
