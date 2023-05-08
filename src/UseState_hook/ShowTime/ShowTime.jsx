import React, { useState } from "react";
const ShowTime = () => {

    let newTime = new Date().toLocaleDateString();
   // const state = useState();
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
export default ShowTime;

