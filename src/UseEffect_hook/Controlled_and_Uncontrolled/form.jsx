import React, { useState } from "react";
import { useRef } from "react";
const Form = () =>{
    const name = useRef(null);
    const [show, setShow] = useState(false);

    const submitForm = (e) =>{
        e.preventDefault();
        const data = (name.current.value)
        data === "" ? alert("Fill your name first"): setShow(true);
    }
    return(
        <>
        <form onSubmit={submitForm}>
            <div>
            <label>Enter your name: </label>
            <br />
                <input type="text" ref={name}/> 
                <br />
                <button>Submit</button>
            </div>
        </form>
        <p>{show ? `your name is ${name.current.value}` : ""}</p>

        </>
    )
};
export default Form;