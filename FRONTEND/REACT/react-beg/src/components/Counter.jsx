import { useState } from "react";

export default function Counter(){
    /*let arr = useState(0); THIS WILL BE DECONSTRUCTED AS*/
    let [count, setCount] = useState (0); //only for initialization
//================PORTION THAT RE-RENDERS========================
    let incCounter = () =>{
        setCount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCounter}>Increment Count</button>
        </div>
    );
//===============RE-RENDERING ENDS=========================
}
