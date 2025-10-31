import React from "react";
import John from './John.jpg'
const weather=()=>
{
    return(
        <div className="font-bold text-center italic text-white">
            <p1>Today weather is good.</p1>
            <img className="bg-cover" src={John} alt="Dash board"/>;
        </div>
    )
}
export default weather;