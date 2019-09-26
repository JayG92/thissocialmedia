import React from 'react';
import { FaCode } from 'react-icons/fa';
import { withContext } from "../../context/"

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardText, CardBody,
  CardTitle, FormGroup, Label
} from 'reactstrap';
import "./style.css"


class ProfileCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: "BrentHaskins",
      bio: "Welcome to This. Social Media for developers! Edit this bio, and tell us about yourself!",
      charCount: "",
      skills: [],

      modal: false
    };
    this.onChangeBio = this.onChangeBio.bind(this);
    this.toggle = this.toggle.bind(this);
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

  onCheckboxBtnClick(selected) {
    const index = this.state.skills.indexOf(selected);
    if (index < 0) {
      this.state.skills.push(selected);
    } else {
      this.state.skills.splice(index, 1);
    }
    if (this.state.skills.length <= 5) {
      this.setState({ skills: [...this.state.skills] });
    }
  }


  render() {
    const TopSkill1 = this.state.skills.length > 0 ? <p><FaCode /> {this.state.skills[0]}</p> : <p className="text-center">Add your top 5 skills here!</p>
    const TopSkill2 = this.state.skills.length > 1 ? <p><FaCode /> {this.state.skills[1]}</p> : <p></p>
    const TopSkill3 = this.state.skills.length > 2 ? <p><FaCode /> {this.state.skills[2]}</p> : <p></p>
    const TopSkill4 = this.state.skills.length > 3 ? <p><FaCode /> {this.state.skills[3]}</p> : <p></p>
    const TopSkill5 = this.state.skills.length > 4 ? <p><FaCode /> {this.state.skills[4]}</p> : <p></p>
    return (
      <div className="pCard">
        <Card>
          <CardBody>
            <div className="border-bottom" id="pBgColor">
            </div>
            <div className="text-center">
              <img id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
              <CardTitle id="pUsername">@{this.props.user.email}</CardTitle>
            </div>

            <CardText>{this.state.bio}
            </CardText>
            <hr></hr>
            <h5 className="text-center">Top Skills</h5>
            <p className="topSkill1">{TopSkill1}</p>
            <p className="topSkill2">{TopSkill2}</p>
            <p className="topSkill3">{TopSkill3}</p>
            <p className="topSkill4">{TopSkill4}</p>
            <p className="topSkill5">{TopSkill5}</p>

            <hr></hr>
            <div className="buttons">
              <a href="/profile">
                <Button className="view-profile">View Profile</Button>
              </a>
              <div>
                <Button className="modal-button pEdit"
                  onClick={this.toggle}>{this.props.buttonLabel}
                  <i className="far fa-edit"></i>
                </Button>

                <Modal isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}>

                  <ModalHeader toggle={this.toggle}>Edit bio</ModalHeader>

                  <ModalBody>

                    <FormGroup>
                      <textarea
                        type="textarea"
                        name="text"
                        id="exampleText"
                        className="noresize"
                        maxLength={155}
                        value={this.state.bio}
                        onChange={this.onChangeBio}>
                      </textarea>
                    </FormGroup>



                    <hr></hr>
                    <div>
                      <h5>Add/Remove skills</h5>
                      <Button
                        className="skillBtn1"
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick("HTML ")}
                        active={this.state.skills.includes(1)}>HTML
                      </Button>


                      <Button className="skillBtn1" 
                              color="primary" 
                              onClick={() => this.onCheckboxBtnClick("CSS ")} active={this.state.skills.includes(2)}>CSS
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Javascript ")} active={this.state.skills.includes(3)}>Javascript
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("jQuery ")} active={this.state.skills.includes(4)}>jQuery
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("React.js ")} active={this.state.skills.includes(5)}>React.js
                      
                      </Button>
                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Node.js ")} active={this.state.skills.includes(6)}>Node.js
                      </Button>


                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("PHP ")} 
                      active={this.state.skills.includes(7)}>PHP
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Ruby ")} 
                      active={this.state.skills.includes(8)}>Ruby
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Python ")} active={this.state.skills.includes(9)}>Python
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Golang ")} active={this.state.skills.includes(10)}>Golang
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("ASP.NET ")} active={this.state.skills.includes(11)}>ASP.NET
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("C# ")} 
                      active={this.state.skills.includes(12)}>C#
                      </Button>

                      <Button 
                      className="skillBtn1" 
                      color="primary" 
                      onClick={() => this.onCheckboxBtnClick("Java ")} 
                      active={this.state.skills.includes(13)}>Java
                      </Button>
                      
                    </div>
                  </ModalBody>
                  <br></br>
                  <ModalFooter>

                    <Label 
                      for="exampleText">
                                <h6 
                      className="text-muted pMaxLength">
                        <small>Characters Left: {this.state.bio.length}/155</small>
                                </h6>
                    </Label>

                    <Label 
                    for="exampleText">
                                <h6 
                    className="text-muted pMaxSkills">
                        <small>Top Skills Limit: {this.state.skills.length}/5</small>
                                </h6>
                    </Label>

                    <Button 
                          color="primary" 
                          onClick={this.toggle}>Save
                    </Button>{' '}
                    <Button 
                          color="light" 
                          onClick={() => this.setState({ skills: [] })}>Clear Skills
                    </Button>
                    <Button 
                          color="danger" 
                          onClick={this.toggle}>Cancel
                    </Button>

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

export default withContext(ProfileCard);

