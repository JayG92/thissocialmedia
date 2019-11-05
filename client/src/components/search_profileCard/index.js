import React from 'react';
import { FaCode } from 'react-icons/fa';
import API from "../../utils/API";
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./style.css"
import { withContext } from '../../context';

class Search_profileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
      profilepic: "",
      _id: "",
      rank: "",
      following: [],
      followers: [],
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      profilepic: props.profilepic,
      rank: props.rank,
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleFollowingUser = (event) => {
    if (this.props.user.following.indexOf(this.props.email) > -1) {
      console.log("it worked")
    } else {
      let email = this.props.user.email
      this.setState({ isFollowing: !this.state.isFollowing })
      this.setState({ following: this.props.user.following })
      this.setState({ followers: this.props.user.followers })

      API.updateUser(email, {
        following: this.props.email,
      })
      API.updateUser(this.props.email, {
        followers: this.props.user.email,
      })
        .catch(err => console.log(err));
    }
  }

  handleUnfollowing = (event) => {
    let email = this.props.user.email

    var toRemove = this.props.email;
    var index = this.props.user.following.indexOf(toRemove);
    if (this.props.user.following.indexOf(this.props.email) > -1) {
      this.setState({ isFollowing: !this.state.isFollowing })
      this.setState({ following: this.props.user.following.splice(index, 1) })
      this.setState({ followers: this.props.user.followers.splice(index, 1) })

      API.updateUser(email, {
        following: this.props.user.following.splice(index, 1),
      })
      API.updateUser(this.props.email, {
        followers: this.props.user.followers.splice(index, 1),
      })
      console.log("testing")
    } else {
      console.log("didnt work")
    }

    // if (this.props.user.following.indexOf(this.props.email) > -1) {
    //   this.props.user.following.splice(this.props.email)
    // }
  }



  render() {
    const TopSkill1 = this.props.skills.length > 0 ? <p><FaCode /> {this.props.skills[0]}</p> : <p className="text-center skillsNotAvailable">{this.props.email} hasnt added any skills yet!</p>
    const TopSkill2 = this.props.skills.length > 1 ? <p><FaCode /> {this.props.skills[1]}</p> : <p></p>
    const TopSkill3 = this.props.skills.length > 2 ? <p><FaCode /> {this.props.skills[2]}</p> : <p></p>
    const TopSkill4 = this.props.skills.length > 3 ? <p><FaCode /> {this.props.skills[3]}</p> : <p></p>
    const TopSkill5 = this.props.skills.length > 4 ? <p><FaCode /> {this.props.skills[4]}</p> : <p></p>

    if (this.state.rank === "") {
      this.setState({ rank: "1" })
    }

    if (this.state.rank === "1") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeNewUser"><span id="badgeTitle">New Member</span></span></div> })
    }
    if (this.state.rank === "2") {
      this.setState({ rank: <div className="badgePlacement"><span id="badgeMember"><i class="fas fa-user"></i><span id="badgeTitle">Member</span></span></div> })
    }
    if (this.state.rank === "5") {
      this.setState({
        rank: <div className="badgePlacement"><span id="badgeModerator"><i class="fas fa-user-shield"></i><span id="badgeTitle">Moderator</span></span></div>
      })
    }
    if (this.state.rank === "9") {
      this.setState({
        rank: <div className="badgePlacement"><span id="badgeAdmin"><i class="fas fa-star"></i><span id="badgeTitle">Admin</span></span></div>
      })
    }
    if (this.state.rank === "10") {
      this.setState({
        rank: <div className="badgePlacement"><span id="badgeFounder"><i class="fas fa-crown"></i><span id="badgeTitle">Founder</span></span></div>
      })
    }

    if (this.props.email !== this.props.user.email) {
      var test1 = <Button onClick={this.handleUnfollowing} className="modal-button mUnfollow"><span id="searchFollow"><t>Unfollow</t></span><i class="fas fa-user-minus"></i></Button>
      var test2 = <Button onClick={this.handleFollowingUser} className="modal-button mFollow"><span id="searchFollow"><t>Follow</t></span><i class="fas fa-user-plus"></i></Button>
    }
    console.log(this.props.user)

    if (window.location.pathname === "/userprofile/" + this.props.id) {
      return (
        <div className="pCard">
          <Card>
            <CardBody>
              <div className="border-bottom" id="pBgColor"></div>
              <div className="text-center">
                <div>{this.props.profilepic ? <img className="memberImg" id="pImage" src={this.props.profilepic} alt="Profile"></img> : <img className="memberImg" id="pImage" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Profile"></img>}</div>
                <CardTitle id="pUsername">@{this.props.email}</CardTitle>
                <div className="text-center">
                  <div className="badgeContainer">
                    <div>{this.props.rank === "" ? <div className="badgePlacement"><span id="badgeNewUser"><span id="badgeTitle">New Member</span></span></div> : ""}</div>
                    <div>{"1" === this.props.rank ? <div className="badgePlacement"><span id="badgeNewUser"><span id="badgeTitle">New Member</span></span></div> : ""}</div>
                    <div>{"2" === this.props.rank ? <div className="badgePlacement"><span id="badgeMember"><i class="fas fa-user"></i><span id="badgeTitle">Member</span></span></div> : ""}</div>
                    <div>{"5" === this.props.rank ? <div className="badgePlacement"><span id="badgeModerator"><i class="fas fa-user-shield"></i><span id="badgeTitle">Moderator</span></span></div> : ""}</div>
                    <div>{"9" === this.props.rank ? <div className="badgePlacement"><span id="badgeAdmin"><i class="fas fa-star"></i><span id="badgeTitle">Admin</span></span></div> : ""}</div>
                    <div>{"10" === this.props.rank ? <div className="badgePlacement"><span id="badgeFounder"><i class="fas fa-crown"></i><span id="badgeTitle">Founder</span></span></div> : ""}</div>
                    {/* {this.props.rank} */}
                  </div>
                </div>
              </div>

              <CardText>{this.props.bio}</CardText>
              <hr></hr>
              <h5 className="text-center">Top Skills</h5>
              <p className="topSkill1">{TopSkill1}</p>
              <p className="topSkill2">{TopSkill2}</p>
              <p className="topSkill3">{TopSkill3}</p>
              <p className="topSkill4">{TopSkill4}</p>
              <p className="topSkill5">{TopSkill5}</p>
              <hr></hr>
              <h5 className="text-center">Github</h5>{this.props.repoLink ?
                <a href={"https://github.com/" + this.props.repoLink}><h6>https://github.com/{this.props.repoLink}</h6></a>
                : <p className="text-center githubNotAvailable">{this.props.email} hasnt added a username yet!</p>}
              <hr></hr>
              <div className="text-center">
                <div>{this.props.user.following.indexOf(this.props.email) > -1 ?
                  <div>{test1}</div>
                  :
                  <div>{test2}</div>
                }
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

      )
    } else {
      return null
    }
  };
}

export default withContext(Search_profileCard)