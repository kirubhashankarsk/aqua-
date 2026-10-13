import {React,useState} from 'react'
import './Project.css'
const Project= () =>{
    /*const [value,setValue]=useState(
   {
        id:0,
        name:"",
        age:0,
        dept:"",
        mark:0
    }
   
    );
     const [form,setForm]=useState(
   {
        id:1,
        name:"Arun",
        age:21,
        dept:"CSE",
        mark:90
    }
    );
    
    
    /*const[input,setInput] =useState("")
    const [email,setEmail]=useState();
    const [age,setAge]=useState(0);
    function inc(){
        //setValue(value + 10)
        //if(value == 0){
        //    setValue(1)
        
        //}
        //else{
         //   setValue(0)
       // }
        //setValue(value===0?1:0)
        setValue(!value)
    }
    function emaily(event){
        setEmail(event.target.value)
    }
    //function getData(e) {
           // setInput(e.target.value)
       // }
        function register(event) {
            setInput(event.target.value)
        }
        function handleSubmit(event){
            event.preventDefault();
            alert(input)
            alert(emaily)
        }
            </form>
        {input}
        function ager(event){
            setAge(event.target.value)
        }*/
      /* function change(event){
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
       }
       function submit(event){
        event.preventDefault();
        setForm({
            ...form,
            name:value.name,
            age:value.age
        })

       }*/const[form,setForm] = useState(
    {    
      id:0,
        Name:"",
        Dept:"",
        Clg:"",
        Age:0,
        Mark:0
    }
  );
  const[value,setValue] = useState(
    {    
      id:1,
        Name:"KK.OMK.PK.MRP",
        Dept:"CSE",
        Clg:"MEC",
        Age:20,
        Mark:90
    }
  )
  function change(event){
    setValue({...value,[event.target.name]:event.target.value

    }

    )
  }
  function submit(event){
    event.preventDefault();
    setForm({...form,Name:value.Name,Age:value.Age
    }

    )
  }

       
    /*return(
        /*<div style={{backgroundColor:value?"black":"whitesmoke",height:"100vh"}}>
        {value}
        <span onClick={inc}>{value?"☀️":"⏾⋆.˚"}</span>
        <form onSubmit={handleSubmit}>*/
/*<div>
    {form.name}
    {form.age}
            <label>Name</label><br/><input onChange={change} name={"name"} placeholder="enter your name"/><br/>
            Email:<input /><br/>
            <label>Age</label><br/><input  onChange={change} name={"age"}/><br/>
            <button type="submit">submit</button>
        
        </div>
    )
}*/return (
    <div>
      {value.Name}<br />
      {value.Age}
      <form>
        <label>Name</label><br></br><input onChange={change} Name={"Name"} placeholder="enter your name"/> <br />
        <label>Email</label><br/><input></input><br/>
      
        <label>Age</label><br/><input onChange={change}></input><br />
        <button type='Submit'>Submit</button>

      </form>
    </div>
  )
}

export default Project