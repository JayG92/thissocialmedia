import React from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Member_userBox from "../components/member_userBox/index";
import Axios from "axios";

class UserProfile extends React.Component {
  state = {
    users: [
      {
        "skills": [],
        "posts": [],
        "events": [],
        "_id": "5d88fd44ad000b63cf5f096a",
        "email": "brent@b.com",
        "password": "123",
        "phonenumber": "1",
        "birthday": "",
        "date": "2019-09-23T17:13:40.126Z",
        "__v": 0
      },
      {
        "skills": [],
        "posts": [],
        "events": [],
        "_id": "5d885c233cac095daa020631",
        "email": "brent@brent.com",
        "password": "123456!",
        "phonenumber": "1",
        "birthday": "",
        "date": "2019-09-23T05:46:11.633Z",
        "__v": 0
      },
      {
        "skills": [],
        "posts": [],
        "events": [],
        "_id": "5d885c0a3cac095daa020630",
        "email": "brent@brent.com",
        "password": "123",
        "phonenumber": "1",
        "birthday": "",
        "date": "2019-09-23T05:45:46.076Z",
        "__v": 0
      }

    ],
    email: [
    ],
  }

  componentDidMount() {
    this.loadUser();
  }



  loadUser = () => {
    //API.getUsers()
    Axios.get("/user").then(res => {
      console.log(res.data)
      if (res.data) {
        this.setState({
          users: res.data.users
        })
      }

    });
    // catch(err => console.log(err));

  };


  render() {
    const { users } = this.state;
    return (
      <div>
        <ThisNavbar />
        <Container>
          <div className="topContainer"></div>
          <Row>

            <Col>
              {users.length !== 0 && users.map(user => (
                <Member_userBox
                  key={user.id}
                  email={user.email} />
              ))}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
