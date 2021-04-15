import React from 'react'
import styled from 'styled-components'



const Section = styled.div`
background: #961D41;
padding: 10vh 0 10vh 0;
margin-top:0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center
;
text-align:center;`

const Align = styled.div`
width:80vw;
margin: 0 auto;`


const H1 = styled.h1`
width:100vw;
text-align:center;
`

const Input = styled.input`
border:0;
width:85%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`


const Textarea = styled.textarea`
border:0;
width:85%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`


const ButtonSubmit = styled.button`

background: #180E3B url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
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
:hover{background: #ffffff url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='black'  xmlns='http://www.w3.org/2000/svg'>
<path d='M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
color:black}`
;


function CreateTrip() {

return <div>

<Section>



<Align>

<h1>Criar uma viagem</h1>


<Input placeholder={"digite aqui um nome"}/>

<Input placeholder={"digite aqui o planeta"}/>

<Input type="date" placeholder={"escolha a data"}/>

<Input type="number" placeholder={"qual tempo de duração da viagem?"}/>

<Textarea placeholder={"digite aqui a descrição"}/>

<ButtonSubmit> Enviar </ButtonSubmit>

</Align>

</Section>

</div>
    
    
}

export default CreateTrip