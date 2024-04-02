import { useEffect, useState } from "react";
import { emitter } from "../App";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    const onIncrementHandler = () => {
      setCount((count) => count + 1)
    }
    const onDecrementHandler = () => {
      setCount((count) => count - 1)
    }
    emitter.on("inc", onIncrementHandler)
    emitter.on("dec", onDecrementHandler)

    // Clean up, make sure listeners are remove when component unmounted.
    return () => {
      emitter.off("inc", onIncrementHandler);
      emitter.off("dec", onDecrementHandler);
    }
  }, [])
  return (
    <div>
      #:{count}
    </div>
  )
};
export default Counter;
