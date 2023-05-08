import React, { useEffect, useState } from "react";
const CleanUpFunction = () =>{
    const[widthCount, setWidthCount] = useState(window.screen.width);
    
    //this helps to find the actual width of the screen on resizing
    const actualWidth = () =>{
        setWidthCount(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize", actualWidth);

        //cleaning up the function
        return () =>{
            window.removeEventListener("resize", actualWidth);
        }
    });
  
    return(
        
        <>
        <h1>Screen width size is : {widthCount}</h1>
        </>
    );
};
export default CleanUpFunction;