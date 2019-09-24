import React from 'react';
import { Container, Row, Col, Form, Button, Label, Input } from 'reactstrap';
import logo from "../../imgs/whitelogo.png";
import "./style.css"
import axios from 'axios';
import API from "../../utils/API";

export default class Signupform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
    password: "",
    phonenumber: "",
    birthday: "",
    confirmPasword:""
    };
}

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
  
    // Updating the input's state
    this.setState({
      [name]: value
    
  });
};

handleFormSubmit=event=>{
  event.preventDefault();
  API.saveUser({
  email:this.state.email,
  password:this.state.password,
  phonenumber:this.state.phonenumber,
  birthday:this.state.birthday
  })
  .then(res=>this.props.loadUser())


  
  .catch(err=>console.log(err))


}


  //   API.saveUser("/users",{
  //     email: this.state.email,
  //     password: this.state.password,
  //     phonenumber: this.state.phonenumber
  //   }).then(response => {
  //     console.log(response)
  //     if (response.data){
  //       console.log("successful sign up")
  //       this.setState({
  //         redirectTo:"/login"
  //       })
  //     } else {
  //       console.log("signup Error")
  //     }
  //   }).catch(error =>{
  //     console.log("sign up server error: ")
  //     console.log(error)
  //   })
  // }


  render() {
    return (
      <Container>
        <div className="signupContainer"></div>
        <div className="logoBg"></div>
        <Row>
          {/* Logo */}
          <Col xs="6"><h1 className="logoTitle">THIS.SOCIAL.MEDIA</h1><img id="signuplogo" src={logo} alt="Logo"></img>
          <h4 className="logoSubText"><i className="fas fa-search logoSubIcons"></i>Follow your interests.</h4>
          <h4 className="logoSubText"><i className="fas fa-user-friends logoSubIcons"></i>Hear what people are talking about.</h4>
          <h4 className="logoSubText"><i className="far fa-comment logoSubIcons"></i>Join the conversation.</h4>

          </Col>



          {/* SignupSheet */}

          <Col className="marginSignup" xs="6">
            <h3 className="signupTitle">Join today!</h3>
            <Form className="signupform">
              <Label>Email</Label>
              <Input
                id="signupEmail"
                className="marginForm"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email"
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
              className="marginForm"
                type="date"
                name="bithday"
                id="birthday"
                placeholder="date placeholder"
              />
              <br>
              </br>
              <Button className="submit-button signupBtn" onClick={this.handleFormSubmit}>Submit</Button>
              
            </Form>



          </Col>
        </Row>
      </Container>

    );
  }
}


