import React from "react";
import { Link, Routes } from "react-router";
import Layout from "./Layout_Task";

function Home_Task() {
return (
<div>
<h1>Welcome to My Portfolio</h1>

  <h2>Hi, I'm a React Developer</h2>

  <p>
    I am a college student interested in web development.

    I enjoy learning new technologies and building projects.
  </p>


  <h2>My Portfolio Pages</h2>

 



 
  <nav>
    
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/Accordian">Accordian</Link>
    
  </nav>
</div>

);
}

export default Home_Task;