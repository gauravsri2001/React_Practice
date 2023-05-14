import React, {useEffect, useState} from "react";
import Loading from "./Loading";
import Display from "./users";
const UseEffectAPI= () =>{

    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    
    const getUsers = async() =>{
        try{
            setLoading(false);
            const getResponce = await fetch('https://api.github.com/users');
            setUsers(await getResponce.json());
        // const data = await getResponce.json();
        // console.log(data);
        }
        catch(error){
            console.log("my error is" + error);
        }
        
    }

    useEffect (() =>{
        getUsers();
    }, []);

    if (loading){
        return <Loading />
    }

    return(
        <>

        {/* using props */}
        <Display users={users}/> 

        </>
    );
};
export default UseEffectAPI;