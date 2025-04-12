import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../Utilities/UserContext";

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
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default AboutComponent;
