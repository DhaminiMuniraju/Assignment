import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <div className="Nav">
        <ul>
         <li><a href="home.html">Home</a></li>
         <li><a href="ContactMe.html">Contact Me</a></li>
         <li><a href="AboutMe.html">About Me</a></li>
         </ul>
        </div>
      );
    }
  }

export default Nav;