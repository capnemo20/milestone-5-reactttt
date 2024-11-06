import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["sakib", "raj", "jasim",  "rubel" , "Salman Shah"]
  const singers = [
    {id: 1, name: "dr mahfuj", age: 68},
    {id: 2, name: "eva rahman", age: 38},
    {id: 3, name: "shuvro deb", age: 58},
    {id: 4, name: "pritom", age: 28}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="18"></Device>
      <Device name="Watch" price="4"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="8" score="78"></Student>
      <Student grade="11" score="85"></Student>
      <Developer></Developer>
      <Actor name = {"salman khan"}></Actor>
      
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Explore Code Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 30;
  const money = 20;
  const person = { name: "sakib", age: 24 };
  return (
    <h3>
      I am a {person.name} of age: {age}
    </h3>
  );
}

function Student({ grade, score }) {
  console.log(grade, score);

  return (
    <div className="student">
      <h3>This is student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h1>Devo devo</h1>
      <p>Coding</p>
    </div>
  );
}

export default App;
