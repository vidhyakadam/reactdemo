import React from "react";

const Basics = () =>{
    let a=10

function increase(){
    a = a+1
    console.log(a)
}



return(
    <div>
        <h1>{a}</h1>
        <button onClick={increase}>Increase</button>
    </div>
)

}

export default Basics;