import React from "react";
import "./styles/rent.css";
import "./styles/App.css";
import profileIcon from "./icons/profile-circle-svgrepo-com.svg"
import searchIcon from "./icons/search-svgrepo-com.svg"

import UCIIcon from "./university-logo/California-Irvine-Anteaters-Logo.png"
const Rent = () =>{
    return(
    <div className="rent-page">

        <img className = "school-icon" src={UCIIcon} alt = ""></img>

        <div className="navbar">
            <div className="search-housing">
                <input type = "search" placeholder= "Enter your school..."></input>
                <img src = {searchIcon} alt = "search"/>
            </div>
            <div className="contents">
                <ul>
                    <li><a href="">make a listing</a></li>
                    <li><a href="">Signup</a></li>
                    <li><a href="">login</a></li>
                    <li><img src = {profileIcon} alt = "profile-icon"/></li>
                </ul>

            </div>

        </div>

        <div className="sidemenu">
            <div className="distance-section">
                <span className="Dis">Distance</span>
                <div className="chec-distance">
                    <ul>
                        <li><input type = "checkbox" name = "distance-1"></input>
                            <label for = "distance-1"> 5 mi</label>
                        </li>
                        <li><input type = "checkbox" name = "distance-2"></input>
                            <label for = "distance-2"> 10 mi</label>
                        </li>
                        <li><input type = "checkbox" name = "distance-3"></input>
                            <label for = "distance-3"> 15 mi</label>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <div className="price-measure">

                <span className="Pri">Price</span>
                <span className="label">$400-$1500</span>
                <div className="range-price">
                    <input type= "range" name="price-range" min = "400" max = "1500"  step = "100"></input>
                    
                </div>
             
            </div>


            <div className="room-section">
                <span className="Roo">Rooming Situation</span>
                <div className="chec-room">
                    <ul>
                        <li><input type = "checkbox" name = "room-1"></input>
                            <label for = "room-1"> Singles</label>
                        </li>
                        <li><input type = "checkbox" name = "room-2"></input>
                            <label for = "room-2"> Doubles</label>
                        </li>
                        <li><input type = "checkbox" name = "room-3"></input>
                            <label for = "room-3"> Triples</label>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>

        
       
    </div>
    );
}


export default Rent;