import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import foto1 from "./img/foto1.jpg";
import foto11 from "./img/foto01.jpg";
import foto2 from "./img/foto2.jpg";
import foto22 from "./img/foto02.jpg";
import foto3 from "./img/foto3.jpg";
import foto33 from "./img/foto03.jpg";
import styled from 'styled-components'

const Input = styled.input`
padding:10px;
margin:10px;
background:white;
border: 2px solid black;
display:flex;
width:88%;
`

const Botao = styled.button`
margin:10px;
background:black;
color:white;
border:0;
`


const H2 = styled.h2`
margin:10px;

`


class App extends React.Component {



  state = {
    usuarios: [
      {
        nomeUsuario: "Paula",
        fotoUsuario: foto1,
        fotoPost: foto11
      },

      {
        nomeUsuario: "Jessica",
        fotoUsuario: foto2,
        fotoPost: foto22
      },

      {
        nomeUsuario: "aninha",
        fotoUsuario: foto3,
        fotoPost: foto33
      }
    ],

    valorInputUsuario: "",
    valorInputFotoPerfil: "",
    valorInputFotoPublicacao: ""

  };

  adicionaPublicacao = () => {
    const novaPubli = {
      nomeUsuario: this.state.valorInputUsuario,
        fotoUsuario: this.state.valorInputFotoPerfil,
        fotoPost: this.state.valorInputpublicacao
          };
    const novaPublicacao = [...this.state.usuarios, novaPubli];
    this.setState({ usuarios: novaPublicacao });
  };

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({valorInputFotoPerfil: event.target.value})
  };

  onChangeInputpublicacao = (event) => {
    this.setState({valorInputpublicacao: event.target.value})
  };


  render() {
    const publicacoes = this.state.usuarios.map((pessoa) => {
      return (
        <div className={"app-container"}>
          <Post
            nomeUsuario={pessoa.nomeUsuario}
            fotoUsuario={pessoa.fotoUsuario}
            fotoPost={pessoa.fotoPost}
          />
        </div>
      );
    });

    return <div>{publicacoes}
    <hr/>
<H2> Adicione sua publicação</H2>
    <Input value={this.state.valorInputUsuario} onChange={this.onChangeInputUsuario} placeholder={"Coloque seu usuário"} />
    <Input value={this.state.valorInputFotoPerfil} onChange={this.onChangeInputFotoPerfil} placeholder={"Coloque sua foto aqui"} />
    <Input value={this.state.valorInputpublicacao} onChange={this.onChangeInputpublicacao} placeholder={"Coloque seu usuário"} />
    <Botao><button onClick={this.adicionaPublicacao}>ADICIONAR SUA PUBLICAÇÃO</button></Botao>
    </div>;
  }
}

export default App;
