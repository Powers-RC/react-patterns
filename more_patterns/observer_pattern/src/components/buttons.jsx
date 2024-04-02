import { emitter } from "../App";

const Buttons = (props) => {
  const onIncrementHandler = () => {
    emitter.emit("inc")
  }

  const onDecrementHandler = () => {
    emitter.emit("dec")
  }

  return (
    <>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={onDecrementHandler}>-</button>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={onIncrementHandler}>+</button>
    </>
  );
};
export default Buttons;
