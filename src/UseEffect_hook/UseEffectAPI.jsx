import React from "react";
const UseEffectAPI= () =>{
    return(
        <>
        <h1>List of Git Hub users</h1>

        
        
        <div className="col-10 col-md-4 mt-5" >
            <div className="card p-2">
                <div className="d-flex align-items-center">
                    <div className="image"> <img src="" className="rounded" width="155" /> </div>
                        <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft"> </h4>
                        {/* <span className="text-left">{type }</span> */}
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div className="d-flex flex-column">
                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                <div className="d-flex flex-column">
                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                    <div className="d-flex flex-column">
                                        <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                    </div>
                                </div>
                        </div>
                </div>
        </div>
        

        </>
    );
};
export default UseEffectAPI;