import React from "react";
import PostForm from "../components/postform/index";
import Feed from "../components/feed/index";
import EventCard from "../components/eventcard/index";
import ThisNavbar from "../components/navbar/index";
import ProfileCard from "../components/profileCard/index"
import { Row, Col, Container } from 'reactstrap';
function Profile() {
    return (
        <div>
            <ThisNavbar />
            <Container>
                <Row>
                    <Col xs="3"><ProfileCard/></Col>
                    <Col xs="6">
                        <PostForm />
                        <Feed />
                    </Col>
                    <Col xs="3">
                        <EventCard />
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Profile;
