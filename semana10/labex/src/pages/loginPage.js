import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
background: #3C234A;
padding: 10vh 0 10vh 0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center;

`
const Main = styled.div`
width:80vw;
margin:0 auto;
padding: 5vh 0 5vh 0;
`

const H1 = styled.h1`
width:100vw;
text-align:center;
`

const H2 = styled.h2`
width:30vw;
text-align:left;
padding-left:1vw;
font-size:25px;
`

const Input = styled.input`
border:0;
width:50%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`



const Clear = styled.div`
  flex-basis: 100%;
  height: 5vh;`



const ButtonSubmit = styled.button`


background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin:1vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #2E1138;
color:white}`

;

function LoginPage () {

    return <div> 



<Main>

<H2>Caso seja um admin, faça login com seus dados</H2>
</Main>



    <Section>
    <H1>Faça login</H1>
       
    <Input placeholder={"e-mail"}/>
    <Input placeholder={"senha"}/>

<Clear/>
<ButtonSubmit> Entrar </ButtonSubmit>

                </Section>
                    </div>
}


export default LoginPage