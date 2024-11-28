import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/Bottles/Bottles";

function App() {
  return (
    <>
      <h2>Memorable Water Bottle</h2>
      <Header></Header>
      <Bottles></Bottles>
    </>
  );
}

export default App;