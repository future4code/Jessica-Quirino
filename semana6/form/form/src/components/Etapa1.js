import React from "react";
import styled from 'styled-components'


const Formcontainer = styled.div`
color:white;
width: 100%;
padding-top:10%;
display:flex;
flex-direction: column;
align-items: center;

`

const Input = styled.input`
padding:10px;
margin:10px;
background:white;
border: 2px solid #333333;
width:60%;
text-align:center;

`

const Select = styled.select`
padding:10px;
margin:10px;
background:white;
border: 2px solid #333333;
width:60%;
text-align:center;

`





const H2 = styled.h2`
margin:10px;

`



class Etapa1 extends React.Component {

    
state={
    valorInputNome: "",
    valorInputIdade: "",
    valorInputEmail: "",
    valorInputEscolaridade: ""
}

    render(){
  
  return (
    <div>
<Formcontainer>
<H2> Etapa 1</H2>
<label>Qual seu nome?</label>
<Input value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder={"digite aqui"} />

    <label>Qual sua idade?</label>
    <Input value={this.state.valorInputIdade} onChange={this.onChangeInputIdade} placeholder={"digite aqui"} />
    
    <label>Qual é o seu e-mail?</label>
    <Input value={this.state.valorInputEmail} onChange={this.onChangeInputEmail} placeholder={"digite aqui"} />
    
    <label>Qual sua formação?</label>
    <Select value={this.state.valorInputEscolaridade} onChange={this.onChangeInputEscolaridade}  >
    <option value="medio-completo">Ensino médio Completo</option>
  <option value="medio-incompleto">Ensino médio Incompleto</option>
  <option value="superior-completo">Superior Completo</option>
  <option value="superior-incompleto">Superior Incompleto</option></Select>

 </Formcontainer>
    </div>
  )
}

}

export default Etapa1;
 
 

