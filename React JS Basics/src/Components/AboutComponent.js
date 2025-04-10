import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor is Called");
  }

  componentDidMount() {}
  render() {
    console.log("Parent Render is called");

    return (
      <div>
        <h1>This is the about Page.</h1>
        <h2>This is about Namaste React Series.</h2>
        <UserClass />
      </div>
    );
  }
}

export default AboutComponent;
