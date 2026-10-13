import React from 'react'
const objectexample =()=>{
    const student =[{
        id:1,
        name:"Arun",
        age:21,
        dept:"CSE",
        mark:90

    },
    {
        id:2,
        name:"Ravi",
        age:20,
        dept:"AIML",
        mark:90

    },
    {
        id:1,
        name:"Kavi",
        age:21,
        dept:"EEE",
        mark:90

    }
]
const numbers=[1,2,3,4,5,6];
console.log("pop",numbers.pop(),numbers)
console.log("push",numbers.push(7),numbers)
console.log("shift",numbers.shift(),numbers)
console.log("unshift",numbers.unshift(0),numbers)
const filtered=numbers.filter(
    function(x){
        return x>5
    }
)
const names=["nadhhu","supriya","loki","pavi"]
const result=names.slice(1,3)
console.log("result",result,names)
const spliceresult=names.splice(1,2,"added")

console.log(">>>>>",spliceresult)
console.log(names)

console.log(filtered)
const datamark=student.filter((i)=>i.mark>95)
console.log(datamark)

//const datamark=student.filter(
  //  function(i){
    //    return i.mark>95
   // }
//)
//console.log(datamark)
//const data = student.map((i)=>{
  //  return(<>
    //{i.name}
    //</>)
    
//})

     return(
        <>
                <table>
                    <thead>   
                        <tr>
                        <th>Name</th>                                 
                    <th>Age</th>
                    <th>Mark</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prakash</td>
                            <td>20</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>praveen</td>
                            <td>20</td>
                            <td>98</td>
                        </tr>
                    </tbody>
                </table>
                {datamark.map((i)=>{
                    return(
                        <>
                        {i.name}
                        </>
                    )
                })}
                </>
            )
}
export default objectexample;
//