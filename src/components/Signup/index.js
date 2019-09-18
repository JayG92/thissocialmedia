import React from 'react';  
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 import Logo from "../../imgs/logo.png";
 import "./style.css";





 class SignUp extends React.Component {
    // Setting the component's initial state
    state = {
      email: "",
      password: "",
      phoneNumber: "",
      birthday: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const email = event.target.email;
      const password = event.target.password;
      const phoneNumber = event.target.phoneNumber;
      const birthday = event.target.birthday;
  
      if (email === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [email]: value,
        [password]: value,
        [phoneNumber]: value,
        [birthday]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.email || !this.state.password) {
        alert("IDK whats happening");
      } else if (this.state.password.length < 6) {
        alert(
          `Choose a more secure password ${this.state.email}`
        );
      } else {
        alert(`Hello ${this.state.email}`);
      }
  
      this.setState({
        email: "",
        password: "",
        phoneNumber: "",
        birthday: ""
      });
    };

 render() {
   return (
     <Container>
        
        {/* App logo Start */}
    
       <Row>
           <Col  className="App-logo" xs="6"><h1>THIS.SOCIAL.MEDIA</h1> <img id="BlueLogo" src={Logo} alt="Logo">
           </img>
           
           </Col>
        {/* End of Logo */}


        {/* Sign Up Sheet Start */}

           <Col
           className="signUpSheet" xs="6"> 
                        <h3>Sign Up</h3>
           <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Label for="exampleEmail">Phone Number</Label>
          <Input type="number" name="number" id="phoneNumber" placeholder="555-555-5555" />
          <FormGroup>
          <Label for="exampleDate">Birthday</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
       
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>


           </Col>
        </Row>
        </Container>
        // end of Sign up Sheet //
   );
}
 }
export default SignUp
   
    