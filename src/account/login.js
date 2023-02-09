import React from "react";




const Login = () =>{

    return(

        <div className="Login">
            <div className="container"></div>
                <form> 
                    <input type = "text" placeholder="Enter school email" name = "uname" required></input>
                    <input type = "text" placeholder="Enter Password" name = "passwrd" required></input>
                    <button type = "submit">Login</button>
                </form>

        </div>
    )
}

export default Login;