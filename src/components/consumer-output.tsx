import React, { FunctionComponent } from "react";
import { CounterContext } from "../providers/counter";

const ConsumerOutput: FunctionComponent = () => {
  return (
    <CounterContext.Consumer>
      {({ counter }) => {
        return <p>Counter value is {counter} (from consumer)</p>;
      }}
    </CounterContext.Consumer>
  );
};

export default ConsumerOutput;
