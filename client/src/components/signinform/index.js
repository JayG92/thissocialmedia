import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import "./style.css"
import API from '../../utils/API';
import Axios from 'axios';


class SigninForm extends React.Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    redirectTo: null,
    loggedIn: "false",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {

    event.preventDefault();
    console.log("handle-submit")
    Axios.post("/user/signin", {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log("loginresponse")
        console.log(response)
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          this.setState({
            redirectTo: "/profile"
          })

        }

      })
      .catch(error => {
        console.log("login-error")
        console.log(error)
      })



  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        {/* <p>
          Login {this.state.email}
        </p> */}
        <Form inline className="signinform">
          <Input
            id="userEmail"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Email"
          />
          <Input
            id="userPassword"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <Button className="submit-button" onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SigninForm;
