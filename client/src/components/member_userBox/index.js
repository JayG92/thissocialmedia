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
            <div>{this.props.profilepic.length >= 1 ? <img className="memberImg" id="pImage" src={this.props.profilepic} alt="Profile"></img> : <img className="memberImg" id="pImage" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="Profile"></img>}</div>
      
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