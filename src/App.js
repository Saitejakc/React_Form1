import "./App.css";
import React from "react";
import Header from "./component/ContactPage/Header";
import Content from "./component/ContactPage/Content";
import Footer from "./component/ContactPage/Footer";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </React.Fragment>
    </div>
  );
}

export default App;
