import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Jumbotron, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


 class PostForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }
  
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    render() {
      return (
        <Jumbotron className="postcard" fluid>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                <i class="far fa-share-square"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <i class="fas fa-calendar-day"></i>
              </NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                <i class="far fa-clipboard"></i>
              </NavLink>
            </NavItem>

          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Post</Button>

                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
          
              </Row>
              <Input placeholder="sm" bsSize="sm" />
              <FormGroup className="timeform">
          <Label for="exampleDate">Date</Label>
          <Input 
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
           
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
        </FormGroup>
              <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Post</Button>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                <Input placeholder="sm" bsSize="sm" />

                <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Post</Button>

                </Col>
              </Row>
            </TabPane>

          </TabContent>
          </Jumbotron>
      );
    }
  }
  

export default PostForm