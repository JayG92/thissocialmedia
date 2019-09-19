import React from 'react';
import { FaCode } from 'react-icons/fa';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./style.css"

const Search_profileCard = (props) => {

    var username = "OtherUser";
    var skills = [
     "Breaking Code"
    ]

    
  return (
    <div id="pCard">
      <Card>
        <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center">
          <img id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle id="pUsername">@{username}</CardTitle>
          </div>

          <CardText>When you click on a users profile, it will bring you to their page and change the profile card! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardText>
          <hr></hr>
          <h5 className="text-center">My Skills</h5>
          <p><FaCode /> {skills[0]}</p>
          <hr></hr>
          <div className="text-center">
          <a href="/profile"><Button>View Profile</Button></a>
          </div>
        </CardBody>
      </Card>
    </div>

    
  );
};

export default Search_profileCard;
