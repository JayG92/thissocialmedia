// NPM Imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//  Components
import UserProfile from "./pages/userProfile";
import Members from "./pages/members";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import Login from "./pages/login";
import ProtectedRoute from "./utils/protectedRoute"

import { UserContext } from "./context";

//  CSS
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(window.localStorage.getItem("user")) || {
      token: ""
    };
    this.state = {
      user,
      updateUser: this.updateUser
    };
  }
  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      const user = JSON.stringify(this.state.user);
      window.localStorage.setItem("user", user);
    });
  }
  updateUser = user => {
    this.setState({ user });
  };

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
        <div>

          <Switch>

            <Route exact path="/userprofile/:id" component={UserProfile} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/messages" component={Messages} />
            <ProtectedRoute exact path="/home" component={Profile} />
            <Route exact path="/" component={Login} />
          </Switch>

        </div>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;

