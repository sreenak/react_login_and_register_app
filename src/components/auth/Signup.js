import React, { Component } from "react";
import axios from "axios";
import { Form} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {

    const { email, password, password_confirmation } = this.state;

    axios
    .post(
      "http://localhost:3001/registrations",
      {
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      },
      { withCredentials: true }
      )
    .then(response => {
      if (response.data.status === "created") {
    this.props.history.push("/login");
        // this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error => {
      console.log("registration error", error);
    });
    event.preventDefault();
  }

  render() {
    return (

      <div className="row">
      <div className="col-sm-12 header-nav-area">
      <div className="content-area-signup">
      <div className="content-signup">
      <h3 className="signup-text">Make the most of your professional life </h3>

      </div>

      </div> 
      <div className="row">
      <div className="col-sm-11 col-md-4 signup-box ml-4 p-2">
      <div className="signin-content">
      <form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-muted">Email or phone number</Form.Label>
        <Form.Control type="email" name="email" value={this.state.email}
            onChange={this.handleChange}
            required placeholder="Enter email or phone number" />
        <Form.Text className="text-muted">
        We'll never share your email and phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-muted">Password(6 or more characters)</Form.Label>
        <Form.Control name="password" type="password"  value={this.state.password}
            onChange={this.handleChange}
            required placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword2">
        <Form.Label className="text-muted">Password(6 or more characters)</Form.Label>
        <Form.Control type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required placeholder="Retype Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
      <Router>
        By clicking Agree & Join  you agree to the Jobsenlist <Link to="/">User Agreement</Link> <Link to="/">Privacy Policy</Link>  and <Link to="/">Cookie Policy </Link> 
        </Router>
        </Form.Text>
      </Form.Group>
      <Button type="submit" className="btn btn-secondary border-signup-btn-search" variant="primary" type="submit">
        Agree & Join 
      </Button>
      </form>

      </div>

      </div>
      </div> 
      </div>
      </div>

      );
  }
}