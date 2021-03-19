import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Dashboard = () => {
  const history = useHistory();

  React.useEffect(() => {
    if (window.sessionStorage.getItem('userStatus') === 'LOGGED_IN') {
      history.push('/login')
    }
  }, []);
  
  return (
    <div >
      <h2> I'm in Dashboard</h2>
      <h2>Dashboard</h2>
      <p>Status: {this.props.loggedInStatus}</p>
   </div>
  );
}
