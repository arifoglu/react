import React from "react";

const Person = (props)=>{
    return (
        <React.Fragment>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
        </React.Fragment>
         
    );
};

export default Person ;
