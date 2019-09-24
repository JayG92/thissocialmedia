// NPM Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//  Components
import UserProfile from "./pages/userProfile";
import Members from "./pages/members";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import Login from "./pages/login";

//  CSS
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
