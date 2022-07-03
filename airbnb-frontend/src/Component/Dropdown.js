import React from "react"

function Dropdown({left, top}){
    return(
        <div className="dropdownContainer" style={{"left": left, "top": top}}>
            <div className="dropdownMenu" >
                <div><a className="dropdownItem" href="#">Sign up</a></div>
                <div><a className="dropdownItem" href="#">Log in</a></div>
                <hr/>
                <div><a className="dropdownItem" href="#">Host your home</a></div>
                <div><a className="dropdownItem" href="#">Host an experience</a></div>
                <div><a className="dropdownItem" href="#">Help</a></div>
            </div>
        </div>
    )
}

export default Dropdown