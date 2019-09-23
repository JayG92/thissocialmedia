import React from "react";
import Signupform from "./components/signupform";
import SigninForm from "../components/signinform";

class LoginPage extends React.Component{


render(){
    return (
        <div>
            <SigninForm />
            <Signupform saveUsers={this.saveUser} />
        </div>
    )
}
}

export default LoginPage;
