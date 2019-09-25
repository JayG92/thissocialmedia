import React from "react";
import Signupform from "../components/signupform";
import SigninForm from "../components/signinform";
import { withContext } from "../context/"


class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <SigninForm {...this.props} />
                <Signupform {...this.props} />
            </div>
        )
    }
}

export default withContext(LoginPage)
