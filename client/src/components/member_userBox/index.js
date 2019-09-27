import React from 'react';
import {
  Card, CardTitle, Button
} from 'reactstrap';
import "./style.css";
import { withContext } from "../../context/"

class Member_userBox extends React.Component {

  // state = {
  //   user: [
  //   ],
  // }


render() {
  return (
    <div className="text-center">
      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
           <CardTitle className="memberName">{this.props.email}</CardTitle> 
          <a href={"/userprofile/"+this.props.id}><Button className="memberViewProfile view-profile">View Profile</Button></a><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
            </div>
      </Card>
    </div>
  );
};
}

export default withContext(Member_userBox);