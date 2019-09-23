import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./pages/userProfile";
import Members from "./pages/members";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signupform from "./components/signupform";
import LoginForm from "./components/signinform";



function App() {
  return (
    <Router>
      <div>
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/" component={Signupform} />
         
      </div>
    </Router>
  );
}

export default App;
