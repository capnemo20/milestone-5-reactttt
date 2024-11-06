import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  );
}

function Person(){
  const age = 30;
  const money = 20;
  const person = {name: "sakib", age: 24}
  return <h3>I am a {person.name} of age: {age}</h3>
}

function Student(){
  const name = "kuku";

  return (
  <div>
    <h3>This is student</h3>
  </div>
  )
}


export default App;
