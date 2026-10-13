import React from 'react'
import ChildB from  "./childB";
const ChildA=({trail})=>{
    return(
        <>
        <div style={{border:"3px solid red",margin : '50px'}}>
        <h1>ChildA</h1>
        <p>{trail.name}</p>
       <ChildB trail={trail}/>
        </div>
        </>
    )
}
export default ChildA