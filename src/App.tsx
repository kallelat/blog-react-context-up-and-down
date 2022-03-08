import React from "react";
import "./App.css";
import ConsumerOutput from "./components/consumer-output";
import CounterContextProvider from "./providers/counter";
import HookOutput from "./components/hook-output";
import ConsumerIncrement from "./components/consumer-increment";
import HookIncrement from "./components/hook-increment";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <ConsumerOutput />
        <HookOutput />
        <ConsumerIncrement />
        <HookIncrement />
      </CounterContextProvider>
    </div>
  );
}

export default App;
