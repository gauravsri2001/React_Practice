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
    const[myArray,setmyArray] = useState(data)

    const clearArray = () =>{
        setmyArray([]);
    }

    const removeElement = (id) =>{
        const newArray = myArray.filter((elements)=>{ //using filter method to filter out the elements (id)
            return elements.id !== id;
        })
        setmyArray(newArray);
    }
    return(
        <>
        {
            myArray.map((elements) =>{
                return(
                    <h1 key={elements.id}> Name: {elements.Name}, Age: {elements.Age}

                    {/* calling function inside function */}
                    <button onClick={()=>{removeElement(elements.id)}}>Remove</button>
                    </h1>

                );
            } )
        }
        <button onClick={clearArray}>Clear</button>

        </>
    );
};

export default Array;