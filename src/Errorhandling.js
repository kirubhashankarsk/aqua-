import {React,useState} from 'react'

function Errorhandling({data}) {
    console.log(data)
    const[value,setValue]=useState(
        {
            name:"",
            email:"",
            mobile:""
        }
    )
    const [error,setError]=useState({
        nameError:"",
        emailError:"",
        mobileError:""
    })
    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
    }
    function hs(event){
        event.preventDefault();
        if(value.name == "" || value.email==""|| value.mobile==""){
            setError({
                ...error,
                nameError:"field is required",
                emailError:"field is required",
                 mobileError:"field is required"
            })
        }
        else if(value.name.length < 3){
             setError({
                ...error,
                nameError:"more than three letters"
            })
        }
            else if(value.mobile.length<10){
                setError({
                ...error,
                mobileError:"more than ten letter"
            })
            }
           // alert("name should be more than 3 letter")
        

    }
  return (
    <div>
      <form onSubmit={hs}>
        <input type="text" placeholder='Name' name="name" onChange={change}/><br/>
        <span style={{color:'red'}}>{error.nameError}</span><br/>
       
      <input type="Email" placeholder='Email'name="email" onChange={change}/><br/>
       <span style={{color:'red'}}>{error.emailError}</span><br/>
      <input type="number" placeholder='Number' name="Mobile" onChange={change}/><br/>
             <span style={{color:'red'}}>{error.mobileError}</span><br/>
      <button type='submit'>submit</button><br/>
      </form>
    </div>
  )
}

export default Errorhandling
