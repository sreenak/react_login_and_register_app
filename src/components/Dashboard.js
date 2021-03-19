import React, { Component } from "react";
import axios from "axios";
export default class Dashboard extends Component {
   render() {
    return (
      <div >
    <h2> I'm in Dashboard</h2>
        <h2>Dashboard</h2>

        <p>Status: {this.props.loggedInStatus}</p>
   </div>
  );
  }
}
