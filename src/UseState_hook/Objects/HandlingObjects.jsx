import React, { useState } from "react";
const HandlingObjects = () =>{
    const[myOjects, setmyObjects] = useState({
        Name:"Gaurav" , age:21             //declaring objects which must be always in {}
    })
    const updateObject = () =>{
        setmyObjects({...myOjects, age:22}) //here ... means that it takes all the values of myObject as it is without any modification and user don't have to enter it again
    }
    return(
        <>
        <h1>{myOjects.Name} , {myOjects.age}</h1>
        <button onClick={updateObject}>Update</button>

        </>
    );
    
};
export default HandlingObjects;