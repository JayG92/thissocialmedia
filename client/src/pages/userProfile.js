import React from "react";
// import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Search_profileCard from "../components/search_profileCard";
import EventCard from "../components/eventcard";
import Feed from "../components/feed";
import "./userProfile.css"


function UserProfile() {
  return (
    <div>
      <ThisNavbar/>
      <Container>
        <div className="topContainer"></div>
      <Row>
          <Col xs="3"><Search_profileCard/></Col>
          <Col xs="6"><Feed/></Col>
          <Col xs="3"><EventCard/></Col>
        </Row>
      </Container>
        </div>
    );
}

export default UserProfile;
