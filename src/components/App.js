import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = React.useState('NOT_LOGGED_IN');
  const [user, setUser] = React.useState({})
  const history = useHistory();

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    console.log(this.props);
    history.push("/dashboard"); //this has to be updated to latest
  }

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          loggedInStatus === "NOT_LOGGED_IN"
        ) {
          setLoggedInStatus('LOGGED_IN')
          setUser(response.data.user)
        } else if (
          !response.data.logged_in &
          (loggedInStatus === "LOGGED_IN")
        ) {
          setLoggedInStatus('NOT_LOGGED_IN')
          setUser({})
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  React.useEffect(() => {
    checkLoginStatus();
  }, [])

  const handleLogout = () => {
    setLoggedInStatus('NOT_LOGGED_IN')
    setUser({})
  }

  const handleLogin = (data) => {
    setLoggedInStatus('LOGGED_IN')
    setUser(data.user)
  }
  return (
    <div className="container-fluid app-container">
          <Router>
    <div className="container-fluid main-conatiner">
    <Navbar>
        <Navbar.Brand  className="brand1" >  
        <Link to="/"><Button className="border-btn" >Jobsenlist</Button></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="brand2">
          <Link to="/login"><Button className="border-btn mr-3" >Signin </Button></Link>
          <Link to="/signup"><Button className="border-btn " > Signup</Button></Link>
        </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
        <Switch>
        <Route path="/login"><Login handleSuccessfulAuth={handleSuccessfulAuth} /></Route> 
        <Route path="/signup">
        <Signup />
        </Route>
        </Switch>
              <p>Status: {loggedInStatus}</p>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      </div>
      </Router>
    </div>
  );
}

export default App;
