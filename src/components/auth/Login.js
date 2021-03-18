
import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
    const { email, password } = this.state;
  // const history = useHistory();

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log(response.data);
    // this.props.history.push("/dashboard")
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
     <div className="row">
    <div className="col-sm-12 header-nav-area">
    <div className="content-area">
    <div className="content">
    <h2 className="signin-text">Welcome to your </h2>
    <h2 className="signin-text">professional community</h2>
    </div>
    <p>{this.state.email}</p>
    <p>{this.state.password}</p>
    </div>  
    <div className="col-sm-12 signin-box">
    <div className="signin-content">
            <form onSubmit={this.handleSubmit}>
<input className="input-signin-data"
    type="email" value={this.state.email}
            onChange={this.handleChange}
            required name="email"
    placeholder ="Email or phone number"
    />
    <br/>

    <input className="input-signin-data"
    type="password" value={this.state.password}
            onChange={this.handleChange}
            required name ="password"
    placeholder ="Password"
    />
    <br/>
    <button type="submit" className="btn btn-secondary border-signin-btn-search" >Signin</button>
      </form>

    </div>
    
    </div>
    </div>
    </div>
    );
  }
}