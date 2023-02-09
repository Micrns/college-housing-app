import React from "react";
import "../styles/carousel.css";

function Carousel({images}) {
    return <div className="carousel-edit">
        <div className="carusel-wrapper"> 
            {images.map((image, index)=>{
                return (
                    <div key = {index} className = "cards">
                        <img classname = "school-img" src = {image.image} alt = ""/>
                    </div>
                )
            })}
        </div>
        
    </div>
    
}

export default Carousel;