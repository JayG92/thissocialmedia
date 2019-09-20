import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css"


export default class LoginForm extends React.Component {
  render() {
    return (
    
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="userEmail" className="mr-sm-2"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="User Email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="userPassword" className="mr-sm-2"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
   
    );
  }
}