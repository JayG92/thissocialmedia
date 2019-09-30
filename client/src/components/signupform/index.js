import React from 'react';
import { Alert, Container, Row, Col, Form, Button, Label, Input } from 'reactstrap';
import logo from "../../imgs/whitelogo.png";
import "./style.css"
import API from "../../utils/API";
import { withContext } from "../../context/"

class Signupform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phonenumber: "",
      birthday: "",
      bio: "",
      invalid: true,
      success: false,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      email: "",
      password: "",
      phonenumber: "",
      birthday: ""
    })


  }

  signup = () => {
    API.signup(this.state).then(res => {
      console.log(res.data);
      this.setState({ success: true });
      this.clearInputs();
    })
      .catch(err => {
        console.log("help" + err);
        this.setState({ invalid: false })
        console.log(this.state.signedUp)
      })
  };


  render() {
    return (
      <Container>
        <div className="signupContainer"></div>
        <div className="logoBg"></div>
        <Row>
          {/* Logo */}
          <Col xs="6">
            <h1 className="logoTitle">THIS.SOCIAL.MEDIA</h1>
            <img id="signuplogo" src={logo} alt="Logo" />
            <h4 className="logoSubText">
              <i className="fas fa-search logoSubIcons" />
              Follow your interests.
            </h4>
            <h4 className="logoSubText">
              <i className="fas fa-user-friends logoSubIcons" />
              Hear what people are talking about.
            </h4>
            <h4 className="logoSubText">
              <i className="far fa-comment logoSubIcons" />
              Join the conversation.
            </h4>
          </Col>



          {/* SignupSheet */}
          <Col className="marginSignup" xs="6">
            <h3 className="signupTitle">Join today!</h3>

            <div>{this.state.invalid === false ?
              <Alert
                className="popup"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
                color="danger">Password is required
                  </Alert> : ""}
            </div>

            <div>{this.state.success === true ?
              <Alert
                className="popup"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
                color="success">This is a YOU AIGHT alert — check it out!
            </Alert> : ""}

            </div>



            <Form className="signupform">
              <Label>Username</Label>
              <Input
                id="signupEmail"
                className="marginForm"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
              />
              <Label>Password</Label>
              <Input
                id="signupPassword"
                className="marginForm"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
              />
              <Label>Phone Number</Label>
              <Input
                id="signupPhone"
                className="marginForm"
                value={this.state.phonenumber}
                name="phonenumber"
                onChange={this.handleInputChange}
                type="number"
                placeholder="Phone Number"
              />
              <Label>Birthday</Label>
              <Input
                id="signupBirthday"
                value={this.state.birthday}

                className="marginForm"
                type="date"
                name="birthday"
                onChange={this.handleInputChange}

                id="birthday"
                placeholder="date placeholder"
              />
              <br>
              </br>
              <Button className="submit-button signupBtn" onClick={this.signup}>Submit</Button>

            </Form>



          </Col>
        </Row>
      </Container>

    );
  }
}

export default withContext(Signupform);
