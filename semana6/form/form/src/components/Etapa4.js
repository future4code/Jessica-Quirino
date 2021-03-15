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


const H2 = styled.h2`
margin:10px;

`



class Etapa4 extends React.Component {



    render(){
  
  return (
    <div>
<Formcontainer>
<H2> O FORMULÁRIO ACABOU</H2><p>Muito obrigado por participar! Entraremos em contato!</p>

 </Formcontainer>
    </div>
  )
}

}

export default Etapa4;
 
 

