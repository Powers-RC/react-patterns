import { useState } from "react";
// import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
    </>
  )
}
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={() => goNext({ age: 16 })}>Next</button>
    </>
  )
}
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Great! You quialify for the prize.</h1>
      <button onClick={() => goNext()}>Next</button>
    </>
  )
}

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4</h1>
      <button onClick={() => goNext({ country: 'usa' })}>Next</button>
    </>
  )
}

function App() {
  const [data, setData] = useState({});
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIdx(currentStepIdx + 1);
  }

  return (
    <>
      <ControlledFlow
        currentIndex={currentStepIdx}
        onNext={goNext}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 &&
          <StepThree />
        }
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
