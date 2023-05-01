import React, { useState } from "react";
const showTime = () => {

    let newTime = new Date().toLocaleDateString();
    let state = useState();
    const[cTime, setcTime] = useState(newTime);
    const UpdateTime = () =>{
        newTime = new Date().toLocaleTimeString();
        setcTime(newTime);
    }
    return (
        <>
        <h1>{cTime}</h1>
        <button onClick={UpdateTime}>Click me</button>
        </>
    ); 
};
export default showTime;
