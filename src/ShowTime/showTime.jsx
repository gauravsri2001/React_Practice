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

// import React, { useState } from "react";

// const ShowTime = () => {
// //   const [cTime, setCTime] = useState(new Date().toLocaleTimeString());

// //   const updateTime = () => {
// //     const newTime = new Date().toLocaleTimeString();
// //     setCTime(newTime);
// return (
//     <>
//       <h1>nef</h1>
//       <button >Click me</button>
//     </>
//   );
//   };

 
// //};

// export default ShowTime;
