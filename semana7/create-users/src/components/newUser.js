import React from "react";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  background: white;
  border: 2px solid black;
  display: flex;
  width: 88%;
`;

const Botao = styled.button`
  margin: 10px;
  background: black;
  color: white;
  border: 0;
`;

class NewUser extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
  };

  onChangeInputname = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputemail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
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
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
        this.createUsers();
        alert("Cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("erro! por favor tente novamente");
      });
  };

  render() {
    return (
      <div>
        <label>
          nome
          <Input
            value={this.state.inputName}
            onChange={this.onChangeInputname}
            placeholder={"digite aqui"}
          />
        </label>

        <label>
          email
          <Input
            value={this.state.inputEmail}
            onChange={this.onChangeInputemail}
            placeholder={"digite aqui"}
          />
        </label>
        <Botao onClick={this.createUsers}>salvar</Botao>
      </div>
    );
  }
}
export default NewUser;
