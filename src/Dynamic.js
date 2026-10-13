import React from "react";
import {useState ,useEffect} from 'react'

const Dynamic=()=>{
   // const[data,setData]=useState({email:"",password:""});
   
    //function submit(e){
       
      //  setData({...data,email:e.target.value})
        //console.log(data)
    //}
    //const[count,setCount]=useState(0)
    //const[val,setVal]=useState(0)
   // useEffect(()=>{ },[])
     //useEffect(()=>{ console.log("test")},[])
     //useEffect(()=>{console.log("every") },)
     const[open,setOpen]=useState(false)
    return(
        <>
        <p className="btn-style"onClick={()=>StereoPannerNode(!open)}>...</p>
        {open &&
        <div className="banner">
            <span>Documentation</span>
            <span>ArchivedbRelreases</span>
        </div>
        }
       </>
    )
}
export default Dynamic