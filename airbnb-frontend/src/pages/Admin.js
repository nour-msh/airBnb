import React, { Component } from 'react';


function AdminPanel(){
    return(
        <>
        <button>Add Category</button>
        <div>

            <input placeholder='Category Name'></input>
            <button>Save</button>
        </div>
        <div>
            <button>Add Resort</button>
            <div>
                <input placeholder='Resort name'></input>
                <input placeholder='Price per night'></input>
                <input placeholder='Availability time'></input>
                <input placeholder='Category ID'></input>
            </div>
        </div>
        </>
    )
}


export default AdminPanel