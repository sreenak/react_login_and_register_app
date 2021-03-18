import React from 'react';

export default function Dashboard() {
  return(
  	<div>
    <h2>Dashboard</h2>
   <h1>Status: {props.loggedInStatus}</h1>
   </div>
  );
}
