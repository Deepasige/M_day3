import React from "react";
import Form from "./hooks/Form"
import State from "./hooks/State";
import Parent from "./components/parent";          // or "./components/Parent"
import User from "./components/User";

const App = () => {
  return (
    <>
      <Parent />
      <State />
      <Form/>
      <User name="xyz" age={33} skills={["HTML", "CSS", "JS", "JAVA"]} />
    </>
  );
};

export default App;