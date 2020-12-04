import React, { Component } from 'react';
import Login from '../components/Auth/Login';
import "./style.css";
import UsersContainer from '../components/Auth/test';

class HomePage extends Component {
  render() {
    return (
      <div className={"home-page-container"}>
        <div className={"home-page-login-container mt-3 shadow-sm"}>
          <Login />
          {/* <UsersContainer/> */}
        </div>

      </div>
    );
  }
}

export default HomePage;
