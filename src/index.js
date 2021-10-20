import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './navbar';
import About from './about';
import Portfolio from './portfolio';
import ScrollToTop from './scroll';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';


function App(){
  return( 
  <Router>
    <ScrollToTop/>
  <section className = 'mainpage'>
    <div className = 'container'>
      <Navbar/>
      <div className = 'maincontent'>
        <p>Prakash is a New York City based web designer/developer.</p>
      </div>
    </div>
    <section className = 'aboutme' id = 'about'>
    <About/>
    </section>
    <Portfolio/>
  
  </section>
  </Router>
  

)

}

ReactDom.render(<App/>, document.getElementById('root'));
