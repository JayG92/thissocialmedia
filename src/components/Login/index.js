import React from 'react';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css";


export default class Login extends React.Component {
    render() {
        return (
            <Container>

                <Row>
                   
                    <Col xs="3">  <Form inline>
                  
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2"></Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2"></Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>


                    </Col>


                </Row>

            </Container>



        );
    }
}
