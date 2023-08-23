import React,{useState} from "react";
import './counter.css'


function Counter(){

    const [value,setValue] = useState(0)

    // const val = useState(0)
    // const value = val[0]
    // const setValue = val[1]
    return (

        
        <div className="main">
            <div className="main-item">
                <button onClick={()=> {
                    setValue(value+1)
                }}> Incriment </button>
                <label>{value}</label>
                <button onClick={()=> {
                    setValue(value-1)
                }}>Decriment</button>

            </div>
        </div>
    )
}
export default Counter;