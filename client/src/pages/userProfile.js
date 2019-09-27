import React from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Search_profileCard from "../components/search_profileCard";
import EventCard from "../components/eventcard";
import Feed from "../components/feed/index";
import Axios from "axios";
import "./userProfile.css";
import { withContext } from "../context";


class UserProfile extends React.Component {
  state = {
    posts: [],
    events: [],
    likes: 0,
    users: [],
    email: [],
  }

  componentDidMount() {
    this.loadPosts();
    this.loadEvents();
    this.loadUser();
  }

  loadUser = () => {
    Axios.get("/user").then(res => {
      console.log(res.data)
      if (res.data) {
        this.setState({
          users: res.data,
        })
      }
    });
    //catch(err => console.log(err));

  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data })
      )
      .catch(err => console.log(err));
  };
  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data })
      )
      .catch(err => console.log(err));
  };

  handleEventSubmit = event => {
    event.preventDefault();
    if (this.state.eventTitle || this.state.eventBody || this.state.date || this.state.time) {
      API.saveEvent({
        eventTitle: this.state.eventTitle,
        eventBody: this.state.eventBody,
        date: this.state.date,
        time: this.state.time,


      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title || this.state.body || this.state.date || this.state.time || this.state.projectLink) {
      API.savePost({
        title: this.state.title,
        body: this.state.body,

      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { users } = this.state;
    console.log(window.location.pathname)
    return (
      <div>
        <ThisNavbar />
        <Container>
          <div className="topContainer"></div>
          <Row>
            <Col xs="3">
            {users.map(user => (
              <Search_profileCard
              key={user.id}
              email={user.email}
              id={user._id}
              bio={user.bio}
              skills={user.skills}
              repoLink={user.repoLink}
              profilepic={user.profilepic}
              
              />
              ))}
            </Col>
            <Col className="SearchContainer" xs="6"><Feed posts={this.state.posts} /></Col>
            <Col xs="3"><EventCard events={this.state.events} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withContext (UserProfile)
