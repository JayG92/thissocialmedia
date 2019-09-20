import React from "react";
import Signupform from "./components/signupform";
import SigninForm from "../components/signinform";

function loginPage() {
    return (
        <div>
            <SigninForm />
            <Signupform />
        </div>
    )
}

export default loginPage;
