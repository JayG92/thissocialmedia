import React from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Search_profileCard from "../components/search_profileCard";
import EventCard from "../components/eventcard";
import Feed from "../components/feed/index";
import "./userProfile.css"


class UserProfile extends React.Component {
  state = {
    posts: [],
    events:[]
  }

  render() {
    return (
      <div>
        <ThisNavbar />
        <Container>
          <div className="topContainer"></div>
          <Row>
            <Col xs="3"><Search_profileCard /></Col>
            <Col xs="6"><Feed posts={this.state.posts}/></Col>
            <Col xs="3"><EventCard events={this.state.events}/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

  export default UserProfile;
