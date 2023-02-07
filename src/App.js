import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import profileIcon from "./icons/profile-circle-svgrepo-com.svg"
import searchIcon from "./icons/search-svgrepo-com.svg"




// function that will display the main page of the web app
const App = () =>{
    return(

        <div className= "main-page">
            <div className="navbar">
                <ul>
                    <li><a href="">Make a Listing</a></li>
                    <li><a href="">Signup</a></li>
                    <li><a href="">Login</a></li>
                    <li><img src = {profileIcon} alt = "profile-icon"/></li>
                    
                </ul>
                
            </div>
            <div className="search-bar">
                <input placeholder="Search your school...."></input>
                <img src = {searchIcon} alt = "search-icon"/>
            </div>
            <span id = "header">Find a place to rent near your school, easily!!</span>
        </div>
    );

}


export default App;