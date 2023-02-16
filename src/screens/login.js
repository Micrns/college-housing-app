import React from "react";
import "../styles/login.css";



const Login = () =>{

    return(

        <div className="Login">
            <div className="container">

                <span className ="head">Login</span>
            <form> 
                    <input className = "email" type = "text" placeholder="School email" name = "uname" required></input>
                    <input className = "passwrd" type = "text" placeholder="Password" name = "passwrd" required></input>
                    <button className = "lgin" type = "submit">Login</button>
                </form>
            </div>
              
        </div>
    )
}

export default Login;