import React from 'react';
import logo from "../assets/logo.png"


function NavBar(){
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
                <button>hello</button>
                <div>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Sign up</a>
                        <a class="dropdown-item" href="#">Log in</a>
                        <a class="dropdown-item" href="#">Host your home</a>
                        <a class="dropdown-item" href="#">Host an experience</a>
                        <a class="dropdown-item" href="#">Help</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar;