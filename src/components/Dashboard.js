
import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  render() {
    return (
    <div>
      <div>
        <h1>I am Dashboard</h1>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>
    </div>
  );
}
}

