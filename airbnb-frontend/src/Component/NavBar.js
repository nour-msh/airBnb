import React, {useState} from 'react';
import logo from "../assets/logo.png"
import Dropdown from './Dropdown';


function NavBar(){
    const [openDropdown,setDropdown]= useState(false)
    const [dropLeft, setDropLeft] = useState(0)
    const [dropTop, setDropTop] = useState(0)

    const showDropDown = (e) => {
        setDropTop(e.clientY + 20)
        setDropLeft(e.clientX - 160)
        setDropdown(!openDropdown)
    }

    return(
        
        <div className='navContainer'>
            <img src={logo} alt=""/>
            <div className='top-container'>
                <button>Anywhere |</button>
                <button>Any week |</button>
                <button className='guests-btn'>Add guests</button>
                <button>S</button>
            </div>
            <div>
                <button>Become a Host</button>
                <button onClick={showDropDown} >hello</button>
            </div>
            {openDropdown && <Dropdown left={dropLeft} top={dropTop}/>}
            
        </div>
        
        
    )
}

export default NavBar;