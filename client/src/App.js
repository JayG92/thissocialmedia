import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Members from "./pages/members";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
