import React, { FunctionComponent, useContext } from "react";
import { CounterContext } from "../providers/counter";

const HookIncrement: FunctionComponent = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Increment by 1 (hook)</button>;
};

export default HookIncrement;
