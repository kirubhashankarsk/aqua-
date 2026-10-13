import React from 'react'

function std() {
    const student ={
        id:1,
        name:"Arun",
        age:21,
        dept:"CSE",
        mark:90
    }
const{id,name,dept,...remains}=student
console.log(remains)
const updatedstudent={
    ...student,
    mark:99
}
    return(
        <>
        <h1>{updatedstudent.mark}</h1>
        </>
        )
    }

export default std
