import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./style.css"

const ProfileCard = (props) => {

    var username = "BrentHaskins";
    var skills = [
     "HTML & CSS",
      "Javascript & jQuery",
      "Node.js"
    ]

    
  return (
    <div className="pCard">
      <Card>
        <CardBody>
        <div className="border-bottom" className="pBgColor"></div>
        <div className="text-center">
          <img className="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="pUsername">@{username}</CardTitle>
          </div>

          <CardText>This is the users bio, and other features on the profile! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardText>
          <hr></hr>
          <h5 className="text-center">My Skills</h5>
          <p><FaCode /> {skills[0]}</p>
          <p><FaCode /> {skills[1]}</p>
          <p><FaCode /> {skills[2]}</p>
          <hr></hr>
          <div className="text-center">
          <a href="/profile"><Button>View Profile</Button></a>
          </div>
        </CardBody>
      </Card>
    </div>

    
  );
};

export default ProfileCard;