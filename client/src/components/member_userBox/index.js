import React from 'react';
import {
  Card, CardTitle, Button
} from 'reactstrap';
import "./style.css"

const Member_userBox = (props) => {
  return (
    <div className="text-center">
      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
            </div>
      </Card>

      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
        </div>
      </Card>

      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
        </div>
      </Card>

      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
        </div>
      </Card>

      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
        </div>
      </Card>

      <Card className="memberBox memberFloat">
          <div className="text-center">
      <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
          <CardTitle className="memberName">Username</CardTitle>
          <Button className="memberViewProfile view-profile">View Profile</Button><Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
        </div>
      </Card>
    </div>
  );
};

export default Member_userBox;