import React, { useState } from "react";
const Name = () => {
    const[cName, setName] = useState("Gaurav");
    const changeName = () => {
        setName("Gaurav Srivastava")
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