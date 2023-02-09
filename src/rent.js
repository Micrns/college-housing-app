import React from "react";
import "./styles/rent.css";

const Rent = () =>{
    return(
    <div className="rent-page">
        <div className="navbar">
            <div className="search-housing">
                <input type = "search" placeholder= "Enter your school..."></input>
            </div>
            <div className="contents">
                <ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Signup</a></li>
                    <li><a href="">Make a listing</a></li>
                </ul>

            </div>

        </div>

        <div classname = "side-menu">
            
        </div>
       
    </div>
    )
}


export default Rent;