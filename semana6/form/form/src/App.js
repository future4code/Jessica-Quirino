import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
body {
    background: #000000;
    color:white;
    margin: 0;
    padding: 0;
    text-align:center;
  }
  button{
    margin:30px;
background:white;
color:black
color:white;
border:0;
padding:10px;
  }
`






class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
        case 3: 
        return <Etapa3 />;
  
        case 4: 
        return <Etapa4 />;
  
  
    }
  }

  avancaEtapa = () => {
    const atualState =  this.state.etapa;
    const novoState = parseInt(atualState) + 1;
    this.setState({ etapa: novoState });

  };


  funcionaBotao = () => {
    if(this.state.etapa < 4) {
   return  <button onClick={this.avancaEtapa}>Próxima etapa</button> }
    else{}
   }


  render(){

    return (

    <div>
 <GlobalStyle/>


    {this.renderizaEtapa()}

 {this.funcionaBotao()}



    </div>
  );
}

}

export default App;
