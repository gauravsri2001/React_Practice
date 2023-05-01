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

// import React, { useState } from "react";
// const UseSate_P = () => {
// const state = useState();
// const[count, setCount] = useState(0) //here count is the initial state and setCount is the final state
//     const Incnum = () => {
//         setCount(count+1)   
//     }
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={Incnum}>Click me</button>
//         </>
//     ); 
// };
// export default UseSate_P;