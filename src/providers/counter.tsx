import React, { useState, createContext, FunctionComponent } from "react";

const initialValue = { counter: 0, increment: () => {} };
export const CounterContext = createContext(initialValue);

const CounterContextProvider: FunctionComponent = ({ children }) => {
  // internal state, will be passed to children using provider
  const [counter, setCounter] = useState(0);

  // a method that increases counter by 1
  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  // return a context provider wrapping children
  return (
    <CounterContext.Provider value={{ counter, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
