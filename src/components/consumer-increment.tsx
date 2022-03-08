import React, { FunctionComponent } from "react";
import { CounterContext } from "../providers/counter";

const ConsumerIncrement: FunctionComponent = () => {
  return (
    <CounterContext.Consumer>
      {({ increment }) => {
        return <button onClick={increment}>Increment by 1 (consumer)</button>;
      }}
    </CounterContext.Consumer>
  );
};

export default ConsumerIncrement;
