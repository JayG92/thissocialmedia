import React from 'react';
import { Container, Row, Col, Form, Button,FormGroup, Label, Input } from 'reactstrap';
import logo from "../../imgs/logo.png";
import "./style.css"
import axios from 'axios';
import API from "../../utils/API";

export default class Signupform extends React.Component {


  state = {
    email: "",
    password: "",
    phonenumber: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const email = event.target.email;
    const password = event.target.password;
    const phonenumber = event.target.phonenumber;

    if (email === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [email]: value,
      [password]: value,
      [phonenumber]: value
     
    });
  }

  handleSignupFormSubmit(event){
    event.preventDefault();
    console.log('signup-form, username: ')
    // console.log(this.state.email)

    API.saveUser("/users",{
      email: this.state.email,
      password: this.state.password,
      phonenumber: this.state.phonenumber
    }).then(response => {
      console.log(response)
      if (response.data){
        console.log("successful sign up")
        this.setState({
          redirectTo:"/login"
        })
      } else {
        console.log("signup Error")
      }
    }).catch(error =>{
      console.log("sign up server error: ")
      console.log(error)
    })
  }

  
  render() {
    return (
      <Container>
         
        <Row>
            {/* Logo */}
        <Col xs="6"><h1>THIS.SOCIAL.MEDIA</h1><img id="signuplogo" src={logo} alt="Logo"></img></Col>


            {/* SignupSheet */}
            
          <Col xs="6">
          <h3>Sign Up</h3>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" 
                 name="email" 
                 id="userEmail" 
                 placeholder="Example@email.com"
                 value={this.state.email}
                 onChange={this.handleInputChange} />
                 
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" 
                 name="password" 
                 id="userPassword" 
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleInputChange}  />
        </FormGroup>
        <FormGroup>
          <Label for="ExamplePhoneNumber">Phone Number</Label>
          <Input type="phonenumber" 
                 name="password" 
                 id="userPhoneNumber" 
                 placeholder="Required"
                 value={this.state.phonenumber} 
                 onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="userBday"
            placeholder="date placeholder"
            value={this.state.birthday}
            onChange={this.handleInputChange} 
          />
        </FormGroup>

          </Form>
          <Button onClick={this.handleSignupFormSubmit} >Submit</Button>
          
          
          </Col>
        </Row>
        </Container>

);
}
}