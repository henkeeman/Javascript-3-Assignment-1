import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";


const loginRegister = () => {


    return(
    <div style={{display: "flex",justifyContent: "center",gap: "100px",marginTop:"150px"}}>
        <div style={{display: "flex",justifyContent: "center",marginTop: "35px"}}><Register/></div>
        <div style={{display: "flex",justifyContent: "center"}}><Login/></div>
        
        
    </div>)
}


export default loginRegister