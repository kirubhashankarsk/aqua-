import React from "react";
import { useParams } from "react-router-dom";
function Contact(){
    const {id}=useParams()
    return(
        <>
        <h1>{id}</h1>
        <h2>hii Contact</h2>
        </>
    )
}
export default Contact