import React from "react";
import Signupform from "./components/signupform";
import SigninForm from "../components/signinform";

class LoginPage extends React.Component{


render(){
    return (
        <div>
            <SigninForm />
            <Signupform />
        </div>
    )
}
}

export default LoginPage;
