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
    _id: "",
  }

  componentDidMount() {
    this.loadPosts();
    this.loadEvents();
    this.loadUser();
  }

  loadUser = () => {
    Axios.get("/user").then(res => {
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
      let email = this.props.user.email

  API.getPosts(email)
    .then(res => {
      let test = res.data
      console.log(test)
      this.setState({ posts: test })
    }
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


  // loadPosts = () => {
  //   let email = this.props.user.email

  //   API.getPosts(email)
  //     .then(res => {
  //       res.data.map(email => {
  //         // console.log(res.data)
  //         console.log(email.email)
  //         // console.log(this.props)
  //         // console.log(this.props.match.params.id)
  //         // console.log(window.location.pathname === "/userprofile/"+this.props.match.params.id)

  //         if (this.props.match.params.id === res.data[1]._id){
  //           console.log("AYYYYYYY it worked")
  //         }
  //       })
  //       console.log(email);
  //       this.setState({ posts: res.data })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    const { users } = this.state;

    return (
      <div>
        <ThisNavbar 
           _id={this.state._id}
                />
        <Container>
          <div className="topContainer"></div>
          <Row>
            <Col xs="3">
            {users[0] && users.map(user => (
              <Search_profileCard
              key={user.id}
              email={user.email}
              id={user._id}
              bio={user.bio}
              skills={user.skills}
              repoLink={user.repoLink}
              profilepic={user.profilepic}
              _id={user._id}
              
              />
              ))}
            </Col>
            <Col className="SearchContainer" xs="6">
              <Feed 
              posts={this.state.posts}
              _id={this.state._id}

             />
             
             </Col>
            <Col xs="3"><EventCard events={this.state.events} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withContext (UserProfile)
