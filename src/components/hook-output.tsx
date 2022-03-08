import React, { FunctionComponent, useContext } from "react";
import { CounterContext } from "../providers/counter";

const HookOutput: FunctionComponent = () => {
  const { counter } = useContext(CounterContext);
  return <p>Counter value is {counter} (from hook)</p>;
};

export default HookOutput;
