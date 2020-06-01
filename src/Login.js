import React, { Component } from 'react';

class Login extends Component{

    render(){
        return(
            <div>
                <form>
                    <label> Name </label>
                    <input type="text" /> <br/>

                    <label> Email </label>
                    <input type="email" /> <br/>

                    <label> Password </label>
                    <input type="password" /> <br/>
                     
                </form>
            </div>
        )
    }
}

export default Login;