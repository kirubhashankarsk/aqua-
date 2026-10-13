import {React,useState} from 'react'
import './As.css'
const As = () => {
    const[value,setValue] =useState("")
    const[data,setData]=useState(0);
    //function llive(){
     //   setData(data.length)
       // console.log(data)
    //}
   

const handleClick = () => {
        setData((data+1));
    };
    
  function inc(){
        
        setValue(!value)
    }
  return (
    <div>
       
       
    
         <div style={{backgroundColor:value?"black":"whitesmoke",height:"100vh"}}>
        
        <span style={{textAlign:'center'}} onClick={inc} >{value?"☀️ ":" 🌛"}</span>
        
         
            <h2>{data}</h2>
            <button onClick={handleClick}>
                Click Me Generate</button><br/>
           <input placeholder='enter your charter'>{}</input>
     
        </div>
      
</div>
  )
}

export default As
 
    
