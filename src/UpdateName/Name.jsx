import React, { useState } from "react";
const Name = () => {
    const[cName, setName] = useState("Gaurav");

    const changeName = () => {

    //applying toggle function
    
    //    let val = cName;
    //     if (val === "Gaurav"){
    //         setName("Gaurav Srivastava")
    //     }
    //     else{
    //         setName("Gaurav")
    //     }

    //another way to write this if else condition

    let val = cName;
    (val === "Gaurav") ?
    setName("Gaurav Srivastava") : setName("Gaurav")
        

    }
return (
    <>
<h1>
    {cName}
</h1>
<button onClick={changeName}>Click here</button>
    </>
);
};
export default Name;