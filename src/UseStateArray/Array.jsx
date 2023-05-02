import React, { useState } from "react";

const Array = () => {

    const data = [
        {
            id:1 , Name: "Gaurav", Age: 21
        },
        {
            id:2 , Name: "Rahul", Age: 31
        },
        {
            id:3 , Name: "Raghav", Age: 27
        }
    ]

    //using usestate for clear button
    const[myArray,setmyArray] = useState(data)

    const clearArray = () =>{
        setmyArray([]);
    }
    return(
        <>
        {
            myArray.map((elements) => <h1 key={elements.id}> Name: {elements.Name}, Age: {elements.Age}</h1>)
        }
        
        <button onClick={clearArray}>Clear</button>

        </>
    );
};

export default Array;