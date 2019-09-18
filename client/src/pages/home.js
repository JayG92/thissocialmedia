import React from "react";
import ThisNavbar from "../components/navbar/index";
import ProfileCard from "../components/profileCard";
import PostBox from "../components/postBox";
import { Container, Row, Col } from 'reactstrap';
import "./home.css"

function Home() {
  return (
    <div>
      <ThisNavbar/>
      <Container>
        <div className="topContainer"></div>
      <Row>
          <Col><ProfileCard/></Col>
          <Col><PostBox/></Col>
          <Col>3rd box</Col>
        </Row>
      </Container>
        </div>
    );
}

export default Home;
