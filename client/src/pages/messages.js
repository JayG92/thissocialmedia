import React from "react";
import API from "../utils/API";
import Footer from "../components/footer/index";
import Axios from "axios";
import MemberList from "../components/messageMemberList/index";
import { withContext } from "../context/"
import ThisNavbar from "../components/navbar/index";
import { Row, Col, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./messages.css"


class Messages extends React.Component {
  state = {
    users: [],
    email: [],
  }

  componentDidMount() {
    this.loadUser();
    this.loadPosts();
    this.loadEvents();
    this.getUserInfo();
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
        this.setState({ posts: res.data }),
      )
      .catch(err => console.log(err));
  };

loadProject = () => {
  API.getPosts()
    .then(res =>
      this.setState({ posts: res.data }),
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
        projectLink: this.state.projectLink,

      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
    }
  };

  loadUser = () => {
    Axios.get("/user").then(res => {
      console.log(res.data)
      if (res.data) {
        this.setState({
          users: res.data,
        })
      }
    });
  };

  getUserInfo = () => {
    let email = this.props.user.email

    API.getUser(email)
      .then(res => {
        this.setState(res.data);

      }
      )
      .catch(err => console.log(err));
  };


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
              <div className="memberListTitle">
                      <div className="border-bottom" id="mBgColor"></div>
        <div className="text-center"><h5 className="memberTitle">Members</h5>
            {users.length !== 0 && users.map(user => (
              <MemberList 
              email={user.email}
              />
            ))}
                    </div>
                    </div>
                    <br></br>
            </Col>

            <Col xs="9">
              <div className="memberMessages">
              <div className="messageContainer">
              <div className="messageUsername border-bottom">@</div>
              <div className="messageBody">Message goes here</div>
              <div className="messagePost border-top">    
              <Form className="formMessage">
      <FormGroup>
        <Input type="message" name="message" id="textMessage" placeholder="Type a message" />
      </FormGroup>
      </Form>
      <Button className="submitMessage" color="primary">Send</Button>
      </div>      
              </div>
              </div>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default withContext(Messages);
