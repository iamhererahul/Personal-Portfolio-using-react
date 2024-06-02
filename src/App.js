import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Section from "./Components/Section";
import Main from "./Components/Main";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Section />
        <Contact />
      </div>
    </>
  );
}

export default App;
