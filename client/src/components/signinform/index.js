import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import "./style.css"
import API from '../../utils/API';
import { withContext } from "../../context/"

class SigninForm extends React.Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
    bio: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};


  login = () => {
    API.login(this.state).then(res => {
      this.props.updateUser({
        token:res.data.token,
        email:res.data.email,
        bio:res.data.bio,
        skills:res.data.skills
      })
      this.props.history.push("/profile")
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
          <Button className="submit-button" onClick={this.login}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default withContext(SigninForm);
