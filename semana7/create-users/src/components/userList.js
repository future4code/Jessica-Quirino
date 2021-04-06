import React from "react";
import styled from "styled-components";
import axios from "axios";

const Caixa = styled.div`
  width: 60%;
  padding: 5%;
  margin: 0px auto;
  border: 2px dotted black;
  display: flex;
  justify-content: space-between;
`;
const Botao = styled.button`
  padding: 3px;
  background: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  transition: 1s;
  :hover {
    background: #e8e8e8;
    color: black;
    border: 1px solid black;
  }
`;

class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
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
        this.setState({ users: res.data });
        console.log(res.data);
      })
      .catch((err) => {});
  };

  deleteUser = (id) => {
    var resultado = window.confirm("Deseja excluir o item");
    if (resultado == true) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "Jessica-Alcantara-Quirino-Cruz"
            }
          }
        )

        .then((response) => {
          this.getAllUsers();
          console.log(response.data);
        })

        .catch((err) => {
        
        });
    }
  };

  render() {
    const usersList = this.state.users.map((user) => (
      <li key={user.id}>
        {" "}
        {user.name}{" "}
        <Botao onClick={() => this.deleteUser(user.id)}>Deletar</Botao>
      </li>
    ));

    return (
      <div>
        <Caixa>
          <ul>{usersList}</ul>
        </Caixa>{" "}
      </div>
    );
  }
}
export default UserList;
