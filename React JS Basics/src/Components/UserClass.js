import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log("Parent Component did mount is called");
    const data = await fetch("https://api.github.com/users/manojbalineni");
    const dataJson = await data.json();
    console.log(dataJson);
    this.setState({
      userData: dataJson,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userData;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
