import React from "react";
// import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Member_userBox from "../components/member_userBox/index";


function UserProfile() {
  return (
    <div>
      <ThisNavbar/>
      <Container>
        <div className="topContainer"></div>
      <Row>
          <Col xs="12"><Member_userBox/></Col>
        </Row>
      </Container>
        </div>
    );
}

export default UserProfile;
