import React from'react';

import { useState  } from 'react';

const Counter=()=>{

    const[count,setCount]=useState(true);
    function change(){
        setCount(!count)
        console.log(count)
    }
    return(
        <div className='counter'>
            <h1>{count?"true":"false"}</h1>
            <div className={count?"box-white":"box-dark"}>d</div>

            <button className='btn_Counter' onClick={change}>Dark/white</button>
          
        </div>
    )
}
export default Counter