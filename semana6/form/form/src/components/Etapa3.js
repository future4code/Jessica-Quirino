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


const Botao = styled.button`
margin:10px;
background:black;
color:white;
border:0;
`


const H2 = styled.h2`
margin:10px;

`



class Etapa3 extends React.Component {

    
state={
    valorInputPorque: "",
    valorInputComplementar: "",
    
}

    render(){
  
  return (
    <div>
<Formcontainer>
<H2> Etapa 3 - INFORMAÇÕES GRAIS DE ENSINO</H2>
<label>Porque você não terminou o curso de graduação?</label>
<Input value={this.state.valorInputPorque} onChange={this.onChangeInputPorque} placeholder={"digite aqui"} />

  
    <label>Você fez algum curso complementar?</label>
    <Select value={this.state.valorInputComplementar} onChange={this.onChangeInputComplementar}  >
    <option value="nenhum">Nenhum</option>
  <option value="tecnico">Ensino técnico</option>
  <option value="ingles">Curso de inglês</option>
  </Select>

 </Formcontainer>
    </div>
  )
}

}

export default Etapa3;
 
 

