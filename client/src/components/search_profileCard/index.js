import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./style.css"

class Search_profileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"OtherUser",
      skills:
      "Breaking code",
      isFollowing: false,
 
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
    <div className="pCard">
      <Card>
        <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center">
          <img id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle id="pUsername">@{this.state.username}</CardTitle>
          </div>

          <CardText>When you click on a users profile, it will bring you to their page and change the profile card! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardText>
          <hr></hr>
          <h5 className="text-center">My Skills</h5>
          <p><FaCode /> {this.state.skills}</p>
          <hr></hr>
          <div className="text-center">
          <Button onClick={() => this.setState({ isFollowing: !this.state.isFollowing })} className="modal-button memberUnfollow"><span id="searchFollow">{this.state.isFollowing ? <t>Unfollow</t> : <t>Follow</t>}</span>{this.state.isFollowing ? <i class="fas fa-user-minus"></i> : <i class="fas fa-user-plus"></i>}</Button>
          </div>
        </CardBody>
      </Card>
    </div>

);
};
}

export default Search_profileCard;
