import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Dropdown({left, top}){
    const [openLoginForm, setLoginForm]=useState(false);
    return(
        <div className="dropdownContainer" style={{"left": left, "top": top}}>
            <div className="dropdownMenu" >
                <div><a className="dropdownItem" href="#">Sign up</a></div>
                <div><a className="dropdownItem" href="#" onClick={()=>{setLoginForm(!openLoginForm)}}>Log in</a></div>
                <hr/>
                <div><a className="dropdownItem" href="#">Host your home</a></div>
                <div><a className="dropdownItem" href="#">Host an experience</a></div>
                <div><a className="dropdownItem" href="#">Help</a></div>
            </div>
            {openLoginForm && <LoginForm/>}
        </div>
    )
}

export default Dropdown