import styled from 'styled-components'
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput"

const Section = styled.section`
background: #333333;
padding: 5vh 0;
margin-top:0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center;
text-align:center;
color:white;
}`


const H1 = styled.h1`
width:100vw;
text-align:center;
color: #ffffff;
font-size:18px;
`
const Input = styled.input`
border:0;
width:85%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`

const Clear = styled.div`
flex-basis: 100%;
height: 5vh;`

const ButtonSubmit = styled.button`
background: #1A490A url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin:1vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:white;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #1A1A1A;
color:white}`;


function FormLogin() {

	const [email, handleEmail] = useInput()
	const [password, handlePassword] = useInput()
	  const history = useHistory()
	
	
	  const login = (event) => {
		const body = {
		  email: email,
		  password: password
		};
	
		axios
		  .post(
			"https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login ",
			body
		  )
		  .then((res) => {
			console.log(res.data);
			window.localStorage.setItem('token', res.data.token)
			history.push('/userPage')
		  })
		  .catch((err) => {
			console.log(window.alert("Dados incorretos"));
		  });
	  
		  event.preventDefault()
		  };
	

		  

 return <div>


<Section>
    <H1>Faça login</H1>
       
       <form onSubmit={login}>
    <Input value={email} onChange={handleEmail} type={"email"} placeholder={"e-mail"}/>
    <Input value={password} onChange={handlePassword} type={"password"} placeholder={"senha"}/>

<Clear/>
<ButtonSubmit> Entrar </ButtonSubmit>
</form>
                </Section>
</div>
    
    
}
export default FormLogin