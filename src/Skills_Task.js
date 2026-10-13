import React from 'react'

function Skills_Task() {
  const Skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js" 
  ];

  return (
    <div>
      <h1>My Skills</h1>
      {Skills.map((skill,index) => (
        <p key={index}>{skill}</p> 
      ))}
       
    </div>
  )
}

export default Skills_Task
