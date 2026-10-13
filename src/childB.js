import React from 'react'

const ChildB=({trail})=>{
    return(
        <>
         <div style={{border:'2px solid black',margin : '50px'}}>
        <h1>ChildB</h1>
        <p>{trail.city}</p>
        </div>
        </>
    );
}
export default ChildB;