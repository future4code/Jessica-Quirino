import React from "react";
import styled from "styled-components";
import axios from "axios";

class listUser extends React.Component {
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const body = {
      id: "string",
      name: "string"
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Jessica-Alcantara-Quirino-Cruz"
          }
        }
      )
      .then((res) => {
        this.setState({ users: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const usersList = this.state.users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));

    return (
      <div>
        TESTANDODDDDD
        <ul>{usersList}</ul>
      </div>
    );
  }
}
export default listUser;
