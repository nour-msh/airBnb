import React from 'react';
import islands from "../assets/islands.jpg"
function CategoriesBar(){
    return(
        <div className='catContainer'>
            <button><img src={islands}/>
            <br/>Islands</button>
            
        </div>
    )
}


export default CategoriesBar