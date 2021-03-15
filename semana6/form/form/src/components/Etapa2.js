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



class Etapa2 extends React.Component {

    
state={
    valorInputCurso: "",
    valorInputUnidade: "",
    
}

    render(){
  
  return (
    <div>
<Formcontainer>
<H2> Etapa 2 - INFORMAÇÕES DE ENSINO SUPERIOR</H2>
<label>Qual o curso?</label>
<Input value={this.state.valorInputCurso} onChange={this.onChangeInputCurso} placeholder={"digite aqui"} />

    <label>Qual a instituição?</label>
    <Input value={this.state.valorInputUnidade} onChange={this.onChangeInputUnidade} placeholder={"digite aqui"} />
    

 </Formcontainer>
    </div>
  )
}

}

export default Etapa2;
 
 

