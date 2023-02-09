import React from "react";


const Signup = () =>{

    return(
        <div classname = "signup">
            <form>
                <input type = "text" placeholder="Enter your school email" name = "usname" required></input>
                <input type = "text" placeholer = "Enter your password" name = "new-password" required></input> 
                <input type = "text" placeholder = "Re-enter your password" name = "check-password" required></input> 
            </form>

            <button type = "submit">Sign in</button>
        </div>
    )
}

export default Signup;
