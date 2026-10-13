import {React,useState} from 'react'

function Studentform() {
    const[value,setValue] =useState("")
    const [input,setInput]=useState(
        {Name:"shankar",Age:21,Course:"CSE"}
    );
    function HL(event){
    setInput({...input,[event.target.name]:event.target.input

    }

    )
  }
  function inc(){
        
        setValue(!value)
    }
    
  return (

    <div>
        <div style={{backgroundColor:value?"black":"whitesmoke",height:"100vh"}}>
        {value}
        <span onClick={inc} >{value?"dark":"light"}</span>
        </div>
      <button onClick={input} >Submit</button>
      
    </div>
  )
}

export default Studentform
