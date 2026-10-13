import React from "react";
import {Link,Outlet} from 'react-router-dom'
function Pay (){
    return(
        <>
        <Link to="About">About</Link>
        <h1>Payment </h1>
        <Outlet/>
        </>
    )
}
export default Pay