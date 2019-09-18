import React from "react";
import API from "../utils/API";

import PostForm from "../components/postform/index";
import Feed from "../components/feed/index";
import EventCard from "../components/eventcard/index";
import ThisNavbar from "../components/navbar/index";
import ProfileCard from "../components/profileCard/index"
import { Row, Col, Container } from 'reactstrap';
class Profile extends React.Component {
state= {
title:"",
body:"",
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", user: "", body: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      API.savePost({
        title: this.state.title,
        body: this.state.body,
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };




    render() {
    return(
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
}

export default Profile;
