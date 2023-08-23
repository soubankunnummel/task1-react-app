import React from "react";



const element = <h1>hello</h1>
console.log(element);

function Header (){
    return(
        <div>
            <p>Loging</p>
           <input placeholder="Name"></input><br></br>
           <input placeholder="Email"></input><br></br>
           <input placeholder="Password"></input><br></br>
           <button >sumbit</button>

        </div>
    )
}
export default Header