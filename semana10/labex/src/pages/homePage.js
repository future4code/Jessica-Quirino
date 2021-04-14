import React from "react";
import styled from "styled-components";


const Cta = styled.div`
width: 30vw;
margin:10vh 0 5vh 0.5vw;
line-height:35px;
font-size:18px;
@media screen and (min-width: 400px & max-width: 900px) {
width:90vw;
margin-top:0vh;
font-size:20px;}
@media screen and (max-width: 400px) {
width:60vw;
margin-top:35vh;}
  `

const Travels = styled.button`

background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin-left:0.5vw;
padding:7px 10px 7px 35px;
border:0;
border-radius: 3px;
font-size:0.90em;
color:white;
transition: 0.9s ease-in;
:hover{background-color: #2E1138 ;}`

function HomePage() {
    return <div>

   


<Cta>Nós te ajudamos a organizar sua viagem dos sonhos para o espaço!<br />
Programe hoje mesmo e tenha essa experiência incrível.</Cta>
<Travels>vejas as viagens</Travels>

    </div>
}

export default HomePage