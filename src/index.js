import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/NavBar/navbar";
import Home from "./components/home.jsx";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <section className="mainpage">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
    </section>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
