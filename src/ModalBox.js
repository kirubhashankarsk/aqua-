import {React,useState} from 'react'
import './ModelBox.css'
function ModalBox() {
    const [Modal,setModal] = useState(false)
  return (
  <>
    <div>ModalBox</div >
    {Modal ?<div className="model">
        <span>Are you sure,Do you want to continue?</span>
        <button onClick={()=>setModal(false)}>OK</button>
        </div>:"" 
    }
        <button onClick={()=>setModal(true)}>confirm</button>
        <div>
          <button>X</button>
          <img src={M.jpg}/>
        </div>
    </>
  )
}

export default ModalBox