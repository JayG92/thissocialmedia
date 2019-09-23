import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import "./style.css"


class SigninForm extends React.Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.email}`
      );
    } else {
      alert(`Signin form hit for:  ${this.state.email}`);
    }

    this.setState({
      email: "",
      password: ""
    });
  };

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