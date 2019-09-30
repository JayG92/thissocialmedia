import React from 'react';
import { Alert, Button, Form, Input } from 'reactstrap';
import "./style.css"
import API from '../../utils/API';
import { withContext } from "../../context/"

class SigninForm extends React.Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      bio: "",
      profilepic: "",
      invalid: true,
      success: false,
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }


  clearInputs = () => {
    this.setState({
      email: "",
      password: "",
      phonenumber: "",
      birthday: ""
    })


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
        skills:res.data.skills,
        repoLink:res.data.repoLink,
        likes:res.data.likes,
        profilepic:res.data.profilepic,
        _id:res.data._id,
        Following:res.data.Following,
        Followers:res.data.Followers,
      })
      this.props.history.push("/home")
    })
    .catch(err => {
      console.log("Signin error: " + err)
    })
      .catch(err => {
        console.log("Wrong username or password" + err);
        this.setState({ invalid: false })
        
      })
  };




  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        {/* <p>
          Login {this.state.email}
        </p> */}
        <Form inline className="signinform">

        <div>{this.state.invalid === false ?
          <Alert
            className="Notpopup"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
            color="danger">Wrong username or Password
                  </Alert> : ""}
        </div>


          <Input
            id="userEmail"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <Input
            id="userPassword"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <Button className="submit-button signinBtn" onClick={this.login}>Submit</Button>
        </Form>


     
      </div>
    );
  }
}

export default withContext(SigninForm);