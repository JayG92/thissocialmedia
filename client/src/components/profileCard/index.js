import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardText, CardBody,
  CardTitle, FormGroup, Label, Input
} from 'reactstrap';
import "./style.css"

class ProfileCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username:"BrentHaskins",
      skills:
      "HTML & CSS",
 
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render () {
  return (
    <div id="pCard">
      <Card>
        <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center">
          <img id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle id="pUsername">@{this.state.username}</CardTitle>
          </div>

          <CardText>This is the users bio, and other features on the profile! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardText>
          <hr></hr>
          <h5 className="text-center">My Skills</h5>
          <p><FaCode /> {this.state.skills}</p>
          <p><FaCode /> {this.state.skills}</p>
          <p><FaCode /> {this.state.skills}</p>
          <hr></hr>
          <div className="buttons">
          <a href="/profile"><Button className="view-profile">View Profile</Button></a><div><Button className="modal-button"  onClick={this.toggle}>{this.props.buttonLabel}<i className="far fa-edit"></i> </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Input bsSize="sm">
        </Input>
        <Input bsSize="sm">
        </Input>
        <Input bsSize="sm">
        </Input>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

          </div>
        </CardBody>
      </Card>

    </div>

    
  );
  
};
}

export default ProfileCard;
