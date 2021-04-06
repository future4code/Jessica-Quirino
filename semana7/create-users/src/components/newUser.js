import React from "react";
import styled from "styled-components";
import axios from "axios";

const Caixa = styled.div`
  width: 60%;
  padding: 5%;
  margin: 0px auto;
  border: 2px dotted black;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  background: white;
  border: 2px solid black;
  display: flex;
  width: 88%;
  font-family: "Montserrat", sans-serif;
`;

const Botao = styled.button`
  margin: 10px;
  padding: 10px;
  background: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  margin-bottom:40px;
  transition: 1s;
  :hover{background: #e8e8e8;
  color:black;
  border: 1px solid black;`;

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
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Jessica-Alcantara-Quirino-Cruz"
          }
        }
      )

      .then((res) => {
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
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
        <Caixa>
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
        </Caixa>
      </div>
    );
  }
}
export default NewUser;
