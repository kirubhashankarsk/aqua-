import {React,useState} from 'react'

function A=() =>{
    const [fo,setFo]=useState(false);
    const AC=[
        {id:1,title:"acc1",para:"paragraph1"},
        {id:2,title:"acc2",para:"paragraph"}

    ]
    function hl{
        setFo(fo==id ? null: id)
    }
  return (
    <div>
    {
         AC.map((res) => {
        return(
            <p className="he" onClick={()=>hl(res.id)}
        )
      })
    }
    </div>
  )
}

export default A


/* const App = () => {
    const randomNumber = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setData(randomNumber(1, 20));
    };

    return (
         <div className="kk">
            <h2>Number is: {data}</h2>
            <button onClick={handleClick}>
                Click Me Generate
            </button>
        </div>




        
    ); 
    
    
    
    .kk {
    padding: 20px;
    text-align: center;
}

h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #3e8e41;
    box-shadow: 1px 1px 10px 1px rgb(185, 185, 185);
    transform: translate(0px, -2px);
*/