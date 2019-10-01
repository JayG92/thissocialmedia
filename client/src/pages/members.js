import React from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Member_userBox from "../components/member_userBox/index";
import Axios from "axios";
import { withContext } from "../context";


class UserProfile extends React.Component {
    state = {
      users: [],
      email: [],
      posts: [],
      events: [],
      bio: "",
      skills: [],
      projectLink: [],
      repoLink: "",
      likes: 0,
      profilepic: "",
      _id: "",

  }

  componentDidMount() {
    this.loadUser();
    this.getUserInfo();
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

  getUserInfo = () => {
    let email = this.props.user.email

    API.getUser(email)
      .then(res => {
        this.setState(res.data);
        console.log(res.data);

      }
      )
      .catch(err => console.log(err));
  };


  render() {
    const { users } = this.state;
    console.log("NewID: " + this.state._id)
    return (
      <div>
        <ThisNavbar 
        _id={this.state._id}
        />
        <Container>
          <div className="topContainer"></div>
          <Row>

            <Col>
              {users.length !== 0 && users.map(user => (
                <Member_userBox
                  key={user.id}
                  email={user.email}
                  id={user._id}
                  profilepic={user.profilepic}
                  _id={user._id}
                  repoLink={user.repoLink}
                  
                  />
              ))}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withContext (UserProfile)
