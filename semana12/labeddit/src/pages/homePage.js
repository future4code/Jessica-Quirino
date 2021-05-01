import React from "react";
import styled from "styled-components";
import FormSign from "../components/formSign"
import useProtectedPageNo from "../hooks/useProtectedPageNo";

const Main = styled.div`
width:80vw;
margin:0 auto;
margin-top:5vh;`

const Cta = styled.div`
width: 50vw;
margin:0 auto;
padding: 5vh 0;
line-height:25px;
font-size:20px;
p{color: #196600;
font-weight: 600; 
font-size:25px;}`;

const HomePage = () => {

useProtectedPageNo()

return (
<div>

<Main>
<Cta>Uma rede social para você ler o que há de melhor na internet.
<p> Aprenda, compartilhe e favorite. </p>
</Cta>
</Main>

<FormSign/>
</div>)
}

export default HomePage