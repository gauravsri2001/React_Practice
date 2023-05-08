import React from "react";
import { useState, useEffect } from "react";
const UseEffect = () =>{
    const [count, setCount] = useState(0);

    //shows the count on the title
    useEffect(() =>{
        document.title = `Count(${count})`
    });
    return(
        <>
<h1>{count}</h1>
<button onClick={
    ()=>setCount(count+1)
}>Click here</button>
        </>
    );
};
export default UseEffect;