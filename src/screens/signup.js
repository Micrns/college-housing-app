import React from "react";
import "../styles/sign-up.css";

const Signup = () =>{

    return(
        <div className = "signup">
            <span className = "header">SignUp</span>
            <form>
                <input className = "credentials email-enter" type = "text" placeholder="Enter your school email" name = "usname" required></input>
                <input className = "credentials enter-passwrd" type = "text" placeholder = "Enter your password" name = "new-password" required></input> 
                <input className = "credentials reenter-passwrd" type = "text" placeholder = "Re-enter your password" name = "check-password" required></input> 
            </form>
            
            <button type = "submit" className= "btn">Access</button>
            
            
        </div>
    )
}

export default Signup;
