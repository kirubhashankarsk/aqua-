import {React,useState} from 'react'
import './Accordion.css'
const Accordion = () =>{
    const [open,setOpen]=useState(null)
    const accor=[
        {id:1,title:"Accordion 1",para:"paragarph 1"},
        {id:2,title:"Accordion 2",para:"paragraph 2"}
    ]
    function handId(id){
        console.log(id)
        //setOpen(id)
        setOpen(open === id?null:id)
    }
    return(
        <>
        {/* <p className='head' onClick={expand}>paragraph</p>
        {open?<p>i ksind sakndkand</p>:""}
        <p className='head'>paragraph1</p>
        <p>helllo brooooo</p> */}
        {
            accor.map((res)=>{
                return(
                    <>
                    <p className='head' onClick={()=> handId(res.id)}>{res.title}</p>
                   
                    {open== res.id ?<p>{res.para}</p>:""}
                    </>
                )
            }
        )
        }
        </>
    )
}
export default Accordion