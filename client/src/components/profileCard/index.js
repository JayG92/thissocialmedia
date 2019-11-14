import React from 'react';
import { FaCode } from 'react-icons/fa';
import API from "../../utils/API";
import { withContext } from "../../context/"

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardText, CardBody,
  CardTitle, FormGroup, Label, CustomInput, Input,
} from 'reactstrap';
import "./style.css"


class ProfileCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      profilepic:"",
      bio: "",
      charCount: "",
      skills: [],
      repoLink: "",
      profilepic: "",
      _id: "",
      rank: "",
      isFixed: true,

      modal: false
    };
    this.onChangeBio = this.onChangeBio.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeRepo = this.onChangeRepo.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.onChangePic = this.onChangePic.bind(this);
    // this.isCardFixed = this.isCardFixed.bind(this);

  }

  componentWillReceiveProps(props) {
    this.setState({
      bio: props.bio,
      skills: props.skills,
      repoLink: props.repoLink,
      profilepic: props.profilepic,
      _id: props._id,
      rank: props.rank,
      isFixed: this.state.isFixed,
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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

  onChangeRepo(e) {
    this.setState({
      repoLink: e.target.value
    })
  }

  onChangePic(e) {
    this.setState({
      profilepic: e.target.value
    })
  }

  // loadUser = (email) => {
  //   API.getUser(email,{

  //   }).then(res => {
  //     console.log(res.data)
  //     if (res.data) {
  //       this.setState({
  //         users: res.data,
  //       })
  //     }
  //   });
  //   //catch(err => console.log(err));

  // };



  //   handleFormSubmit = event => {
  //     this.setState(prevState => ({
  //       modal: !prevState.modal
  //     }));
  //     event.preventDefault();
  //     if (this.state.bio.length >= 0) {
  //       console.log(this.state.bio);
  //       console.log(this.state.skills);
  //         API.updateUser({
  //             bio: this.state.bio,
  //             skills: this.state.skills
  //         })
  //             .catch(err => console.log(err));
  //             // console.log(this.props.skills)
  //     }
  // };

  handleFormSubmit = (event) => {

    let email = this.props.user.email
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    event.preventDefault();

    if (this.state.bio.length >= 0) {
      API.updateUser(email, {
        bio: this.state.bio,
        skills: this.state.skills,
        repoLink: this.state.repoLink,
        profilepic: this.state.profilepic,
        rank: this.props.rank
      })
        .catch(err => console.log(err));
    }
  };

  handleCancelBtn = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.setState({ bio: this.props.bio })
    this.setState({ skills: this.props.skills })
    this.setState({ repoLink: this.props.repoLink })
  }

  // loadUser = (event) => {
  //   let email = this.props.user.email

  //   API.getUser(email)
  //     .then(res =>
  //       this.setState(email,{ bio: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };



  // user = (id) => {
  //   API.updateUser(this.state.id).then(res => {
  //     console.log(res.data)
  //   })
  // }





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

  // isCardFixed = () => {
  //   let email = this.props.user.email

  //   this.setState(prevState => ({
  //     isFixed: !prevState.isFixed
  //   }));
  //   console.log(this.props)
  //   console.log(this.state.isFixed)
  //   API.updateUser(email, {
  //     isFixed: this.state.isFixed
  //   })
  //     .catch(err => console.log(err));
  // }

  isCardFixed = () => {
    this.setState(prevState => ({
      isFixed: !prevState.isFixed
    }));
  }


  render() {
    const TopSkill1 = this.state.skills.length > 0 ? <p><FaCode /> {this.state.skills[0]}</p> : <p className="text-center skillsNotAvailable">Add your top 5 skills here!</p>
    const TopSkill2 = this.state.skills.length > 1 ? <p><FaCode /> {this.state.skills[1]}</p> : <p></p>
    const TopSkill3 = this.state.skills.length > 2 ? <p><FaCode /> {this.state.skills[2]}</p> : <p></p>
    const TopSkill4 = this.state.skills.length > 3 ? <p><FaCode /> {this.state.skills[3]}</p> : <p></p>
    const TopSkill5 = this.state.skills.length > 4 ? <p><FaCode /> {this.state.skills[4]}</p> : <p></p>

    if(this.state.rank === "") {
      this.setState({ rank: "1"})
    }

    if (this.state.rank === "1") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeNewUser"><span id="badgeTitle">New Member</span></span></div>})
    }
    if (this.state.rank === "2") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeMember"><i class="fas fa-user"></i><span id="badgeTitle">Member</span></span></div>})
    }
    if (this.state.rank === "5") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeModerator"><i class="fas fa-user-shield"></i><span id="badgeTitle">Moderator</span></span></div>
    })
    }
    if (this.state.rank === "9") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeAdmin"><i class="fas fa-star"></i><span id="badgeTitle">Admin</span></span></div>
    })
    }
    if (this.state.rank === "10") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeFounder"><i class="fas fa-crown"></i><span id="badgeTitle">Founder</span></span></div>
    })
    }

    return (
      <div>
      {this.state.isFixed === true ?
      <div className="pCard">
        <Card>
        <Button className="isCardFixed" onClick={this.isCardFixed}><i class="fas fa-clone"></i></Button>
          <CardBody>
            <div className="border-bottom" id="pBgColor">              
            </div>
            <div className="text-center">
              <div>{this.state.profilepic.length >= 1 ? <img id="pImage" src={this.state.profilepic} alt="Profile"></img> : <img id="pImage" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Profile"></img>}</div>
              <CardTitle id="pUsername">{this.props.user.email}</CardTitle>
              <div className="text-center">
              <div className="badgeContainer">
                {this.state.rank}
              </div>
            </div>
              </div>

            <CardText>
              <div className="bioContainer">
              {this.state.bio}
              </div>
            </CardText>




            <hr></hr>
            <h5 className="topSkillTitle text-center">Top Skills</h5>
            <p className="topSkill1">{TopSkill1}</p>
            <p className="topSkill2">{TopSkill2}</p>
            <p className="topSkill3">{TopSkill3}</p>
            <p className="topSkill4">{TopSkill4}</p>
            <p className="topSkill5">{TopSkill5}</p>
            <hr></hr>
            <h5 className="text-center">Github</h5>{this.state.repoLink.length > 1 ?
            <a target="_blank" href={"https://github.com/"+this.state.repoLink}><h6>https://github.com/{this.state.repoLink}</h6></a>
            : <p className="text-center githubNotAvailable">Add your Github username here!</p>}
            <hr className="githubHr"></hr>
            <div className="buttons">
              <a href={"/userprofile/"+this.state._id}><Button className="view-profile">View Profile</Button></a><div><Button className="modal-button pEdit" onClick={this.toggle}>{this.props.buttonLabel}<i className="far fa-edit"></i> </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader data-id={this.props.user._id} toggle={this.toggle}>Edit Profile</ModalHeader>
                  <ModalBody>

                    <FormGroup>
                      {/* <Input type="textarea" name="text" id="exampleText" value={this.state.bio} onChange={this.onChangeBio} /> */}
                      <h5>Edit Bio</h5>
                      <textarea type="textarea" name="text" id="exampleText" className="noresize" maxLength={155} placeholder="Tell us about yourself!" defaultValue={this.state.bio} onChange={this.onChangeBio}></textarea>
                    </FormGroup>



                    <hr></hr>
                    <div>
                      <h5>Add/Remove skills</h5>
                      <Button
                        className="skillBtn1"
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick("HTML ")} active={this.state.skills.includes(1)}>HTML
                      </Button>


                      <Button 
                      className="skillBtn1" 
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
                    <br></br>
                    <hr></hr>
                    <h5>Github Username</h5>
                    <textarea type="input" name="text" className="repoLink" maxLength={155} placeholder="Username for Github!" defaultValue={this.state.repoLink} onChange={this.onChangeRepo}></textarea>
                  <br></br><br></br>
                  <h5>Upload Profile Picture</h5>
                  <textarea type="input" name="text" className="repoLink" maxLength={255} placeholder="Upload a picture!" defaultValue={this.state.profilepic} onChange={this.onChangePic}></textarea>

                  </ModalBody>


                  <ModalFooter>

                    <Label for="exampleText"><h6 className="text-muted pMaxLength"><small>Characters Left: {this.state.bio.length}/155</small></h6></Label>
                    <Label for="exampleText"><h6 className="text-muted pMaxSkills"><small>Top Skills Limit: {this.state.skills.length}/5</small></h6></Label>

                    <Button color="primary" onClick={this.handleFormSubmit}>Save</Button>
                    <Button color="light" onClick={() => this.setState({ skills: [] })}>Clear Skills</Button>
                    <Button color="danger" onClick={this.handleCancelBtn}>Cancel</Button>

                  </ModalFooter>
                </Modal>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>




























        // -- Removing Fixed position on selected option in profile card -- //
      : 
      <div className="pCardEdit">
        <Card>
        <Button className="isCardFixed" onClick={this.isCardFixed}><i class="fas fa-clone"></i></Button>
          <CardBody>
            <div className="border-bottom" id="pBgColor">
              
            </div>
            <div className="text-center">
              <div>{this.state.profilepic.length >= 1 ? <img id="pImage" src={this.state.profilepic} alt="Profile"></img> : <img id="pImage" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Profile"></img>}</div>
              <CardTitle id="pUsername">{this.props.user.email}</CardTitle>
              <div className="text-center">
              <div className="badgeContainer">
                {this.state.rank}
              </div>
            </div>
              </div>

            <CardText>
              <div className="bioContainer">
              {this.state.bio}
              </div>
            </CardText>




            <hr></hr>
            <h5 className="text-center">Top Skills</h5>
            <p className="topSkill1">{TopSkill1}</p>
            <p className="topSkill2">{TopSkill2}</p>
            <p className="topSkill3">{TopSkill3}</p>
            <p className="topSkill4">{TopSkill4}</p>
            <p className="topSkill5">{TopSkill5}</p>
            <hr></hr>
            <h5 className="text-center">Github</h5>{this.state.repoLink.length > 1 ?
            <a target="_blank" href={"https://github.com/"+this.state.repoLink}><h6>https://github.com/{this.state.repoLink}</h6></a>
            : <p className="text-center githubNotAvailable">Add your Github username here!</p>}
            <hr></hr>
            <div className="buttons">
              <a href={"/userprofile/"+this.state._id}><Button className="view-profile">View Profile</Button></a><div><Button className="modal-button pEdit" onClick={this.toggle}>{this.props.buttonLabel}<i className="far fa-edit"></i> </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader data-id={this.props.user._id} toggle={this.toggle}>Edit Profile</ModalHeader>
                  <ModalBody>

                    <FormGroup>
                      {/* <Input type="textarea" name="text" id="exampleText" value={this.state.bio} onChange={this.onChangeBio} /> */}
                      <h5>Edit Bio</h5>
                      <textarea type="textarea" name="text" id="exampleText" className="noresize" maxLength={155} placeholder="Tell us about yourself!" defaultValue={this.state.bio} onChange={this.onChangeBio}></textarea>
                    </FormGroup>



                    <hr></hr>
                    <div>
                      <h5>Add/Remove skills</h5>
                      <Button
                        className="skillBtn1"
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick("HTML ")} active={this.state.skills.includes(1)}>HTML
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
                    <br></br>
                    <hr></hr>
                    <h5>Github Username</h5>
                    <textarea type="input" name="text" className="repoLink" maxLength={155} placeholder="Username for Github!" defaultValue={this.state.repoLink} onChange={this.onChangeRepo}></textarea>
                  <br></br><br></br>
                  <h5>Upload Profile Picture</h5>
                  <textarea type="input" name="text" className="repoLink" maxLength={255} placeholder="Upload a picture!" defaultValue={this.state.profilepic} onChange={this.onChangePic}></textarea>

                  </ModalBody>

                  <ModalFooter>

                    <Label for="exampleText"><h6 className="text-muted pMaxLength"><small>Characters Left: {this.state.bio.length}/155</small></h6></Label>
                    <Label for="exampleText"><h6 className="text-muted pMaxSkills"><small>Top Skills Limit: {this.state.skills.length}/5</small></h6></Label>

                    <Button color="primary" onClick={this.handleFormSubmit}>Save</Button>
                    <Button color="light" onClick={() => this.setState({ skills: [] })}>Clear Skills</Button>
                    <Button color="danger" onClick={this.handleCancelBtn}>Cancel</Button>

                  </ModalFooter>
                </Modal>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>
      


      
      }
      </div>
    );
  };
}



export default withContext(ProfileCard);
