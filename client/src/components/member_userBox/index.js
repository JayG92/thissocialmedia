import React from 'react';
import {
  Card, CardTitle, Button
} from 'reactstrap';
import { withContext } from "../../context/"
import "./style.css";

class Member_userBox extends React.Component {


render() {
  return (
    <div className="text-center">
      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src={this.props.profilepic} alt="Profile"></img>
      {/* <div>{this.props.profilepic.length >= 1 ? <img className="memberImg" id="pImage" src={this.props.profilepic} alt="Profile"></img> : ""}</div> */}
           <CardTitle className="memberName">{this.props.email}</CardTitle> 
          <a href={"/userprofile/"+this.props.id}><Button className="memberViewProfile view-profile">View Profile</Button></a><Button className="memberFollow"><i class="fas fa-user-plus"></i></Button>
            </div>
      </Card>
    </div>
  );
};
}

export default withContext(Member_userBox);