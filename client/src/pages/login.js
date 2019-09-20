import React from "react";
import Signupform from "./components/signupform";
import LoginForm from "../components/signinform";

function loginPage() {
    return (
        <div>
            <LoginForm />
            <Signupform />
        </div>
    )
}

export default loginPage;
