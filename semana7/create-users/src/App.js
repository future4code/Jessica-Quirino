import React from "react";
import styled from "styled-components";
import axios from "axios";
import NewUser from "./components/newUser";
import UserList from "./components/userList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
    background: #f6f6f6;
    color:#333333;
    margin: 0;
    padding: 0;
    text-align:center;
    font-family: 'Montserrat', sans-serif;
  }
li{
  list-style: circle; 
  border-bottom: 1px solid black;
  padding-bottom:5px;
margin-bottom:10px;
text-align:left;
}
`;
const Botao = styled.button`
  margin: 10px;
  padding: 10px;
  background: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  margin-bottom: 40px;
  transition: 1s;
  :hover {
    background: #e8e8e8;
    color: black;
    border: 1px solid black;
  }
`;

class App extends React.Component {
  state = {
    tela: 1
  };

  renderizaTela = () => {
    switch (this.state.tela) {
      case 1:
        return <NewUser />;
      case 2:
        return <UserList />;
    }
  };

  avancaTela = () => {
    const atualTela = this.state.tela;
    const novaTela = parseInt(atualTela) + 1;
    this.setState({ tela: novaTela });
  };

  voltaTela = () => {
    const atualTela = this.state.tela;
    const novaTela = parseInt(atualTela) - 1;
    this.setState({ tela: novaTela });
  };

  funcionaBotao = () => {
    if (this.state.tela === 1) {
      return <Botao onClick={this.avancaTela}>Ir para lista de usuários</Botao>;
    } else if (this.state.tela === 2) {
      return <Botao onClick={this.voltaTela}>Voltar para o registro</Botao>;
    }
  };

  render() {
    return (
      <div>
        {" "}
        <GlobalStyle />
        {this.funcionaBotao()}
        {this.renderizaTela()}
      </div>
    );
  }
}
export default App;
