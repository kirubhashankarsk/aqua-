import { useState } from "react";
import './Ex3.css';
function Ex3 ()
{  
    const [count,setCount] =useState({
        name :"Raavan",
        stats :{health : 99,mana : 50}});

       const {name,stats} = count;
       const {health,mana} = stats;

        
    const NameChange = (e) =>
    {
        setCount({
            ...count,
            name : e.target.value
        });
    }
    const TakeDamage = () =>
    {
        setCount({
          ...count,
          stats : {
            ...count.stats,
            health : count.stats.health -15
          }
        })
    }


    return (
        <center>
        <><div className="SS"></div>
        <h2>{name}</h2>
        <p className={health < 20 ? "low-health" : "normal-health"}>
            Health : {health}
        </p><p className="QQ">Mana :{mana}</p><div>
                <input type="text" placeholder="Rename your character" value={name}
                    onChange={NameChange} />
                <button onClick={TakeDamage}>Take A Issue</button>
            </div></>
        </center>
    );   
}
export default Ex3