import React from 'react';
import Header from './header/header'
import './App.css';
import Second from './second/second';
import Projects from './featuredProjects/Projects';
import Process from './process/process';
import Provided from './provided/provided';


function App() {
  return (
    <div className="App">
      
        <Header></Header>  
        <Second></Second>
        <Projects></Projects>
        <Process></Process>
        <Provided></Provided>
       
     
    </div>
  );
}

export default App;
