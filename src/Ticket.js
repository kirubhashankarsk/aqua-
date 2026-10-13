import React from "react";
import{useState} from "react"
const Ticket=()=>{
    const[seat,setSeat]=useState(0);
    function  num(e){
         e.preventDefault();
        console.log(e.target.value)

    }

    return(
        <>
        
            <center>
        <div className="logic">
            <h3>Movie Opening</h3>
            <p>10 Rows are 10 seats</p>
           
               
                     <form>
             <div><input type="Seat Number" placeholder="Enter you Seat Number" onChange={num}/></div>
            <div className="border"> Make it a vip ticket<input type="Checkbox" placeholder="Can you upgrade to Vip"/></div>
            <div><button type ="make it a VIP Ticket">Checkbox</button></div>
          
            </form>
            </div>

        </center>
        </>
    )
}
export default Ticket