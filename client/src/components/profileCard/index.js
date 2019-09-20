import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardText, CardBody,
  CardTitle, FormGroup, Label, Input
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';
import "./style.css"


class ProfileCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: "BrentHaskins",
      bio: "This is the users bio, and other features on the profile! Lorem ipsum dolor sit amet.",
      charCount: "",
      skills:
        "HTML & CSS",
      cSelected: [],

      modal: false
    };
    this.onChangeBio = this.onChangeBio.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value
    })
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  isArrayEmpty() {
    if (this.state.cSelected[1].length > 1) {
      
 }
  }

  render() {
    const TopSkill1 = this.state.cSelected.length > 0 ? <p><FaCode /> {this.state.cSelected[0]}</p> : <p className="text-center">Add your top 5 skills here!</p>
    const TopSkill2 = this.state.cSelected.length > 1 ? <p><FaCode /> {this.state.cSelected[1]}</p> : <p></p>
    const TopSkill3 = this.state.cSelected.length > 2 ? <p><FaCode /> {this.state.cSelected[2]}</p> : <p></p>
    const TopSkill4 = this.state.cSelected.length > 3 ? <p><FaCode /> {this.state.cSelected[3]}</p> : <p></p>
    const TopSkill5 = this.state.cSelected.length > 4 ? <p><FaCode /> {this.state.cSelected[4]}</p> : <p></p>

    return (
      <div className="pCard">
        <Card>
          <CardBody>
            <div className="border-bottom" id="pBgColor"></div>
            <div className="text-center">
              <img id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
              <CardTitle id="pUsername">@{this.state.username}</CardTitle>
            </div>

            <CardText>{this.state.bio}
            </CardText>
            <hr></hr>
            <h5 className="text-center">Top Skills</h5>
            <p className="topSkill1">{ TopSkill1 }</p>
            <p className="topSkill2">{ TopSkill2 }</p>
            <p className="topSkill3">{ TopSkill3 }</p>
            <p className="topSkill4">{ TopSkill4 }</p>
            <p className="topSkill5">{ TopSkill5 }</p>

            <hr></hr>
            <div className="buttons">
              <a href="/profile"><Button className="view-profile">View Profile</Button></a><div><Button className="modal-button pEdit" onClick={this.toggle}>{this.props.buttonLabel}<i className="far fa-edit"></i> </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Edit bio</ModalHeader>
                  <ModalBody>
                    {/* <FormGroup>
                      <Label for="exampleText">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText" value={this.state.bio} />
                      <textarea type="textarea" class="form-control noresize" name="text" id="exampleText" value={this.state.bio} ></textarea>
                    </FormGroup> */}
                    <FormGroup>
                      {/* <Input type="textarea" name="text" id="exampleText" value={this.state.bio} onChange={this.onChangeBio} /> */}
                      <textarea type="textarea" name="text" id="exampleText" className="noresize" maxLength={155} value={this.state.bio} onChange={this.onChangeBio}></textarea>
                    </FormGroup>
                    <br></br>
                    <div>
                    <h5>Add/Remove skills</h5>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("HTML ")} active={this.state.cSelected.includes(1)}>HTML</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("CSS ")} active={this.state.cSelected.includes(2)}>CSS</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Javascript ")} active={this.state.cSelected.includes(3)}>Javascript</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("jQuery ")} active={this.state.cSelected.includes(4)}>jQuery</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("React.js ")} active={this.state.cSelected.includes(5)}>React.js</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Node.js ")} active={this.state.cSelected.includes(5)}>Node.js</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("PHP ")} active={this.state.cSelected.includes(5)}>PHP</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Ruby ")} active={this.state.cSelected.includes(5)}>Ruby</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Python ")} active={this.state.cSelected.includes(5)}>Python</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Golang ")} active={this.state.cSelected.includes(5)}>Golang</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("ASP.NET ")} active={this.state.cSelected.includes(5)}>ASP.NET</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("C# ")} active={this.state.cSelected.includes(5)}>C#</Button>
          <Button className="skillBtn1" color="primary" onClick={() => this.onCheckboxBtnClick("Java ")} active={this.state.cSelected.includes(5)}>Java</Button>






        {/* <p>Selected: {(this.state.cSelected)}</p> */}
      </div>
                  </ModalBody>
                  <ModalFooter>
                    <Label for="exampleText"><h6 className="text-muted pMaxLength"><small>Characters Left: {this.state.bio.length}/155</small></h6></Label>
                    <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>
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
