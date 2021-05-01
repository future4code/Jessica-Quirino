import CardPost from '../components/cardPost'
import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import useRequestPost from '../hooks/useRequestPost'
import useProtectedPage from '../hooks/useProtectPage'

const Container = styled.div`
margin:0px auto;
padding:0;
width:60vw;`

const Title = styled.input`
background: white;
width:100%;
border:0;
padding: 10px 5px;
border-bottom: 1px solid #333333;
:focus{
border:2px solid #276F0F;};`

const Posting = styled.textarea`
background: white;
width:100%;
border:0;
padding: 10px 5px;
border-bottom: 1px solid #333333;
margin-top:3vh;
:focus{
border:2px solid #276F0F;};`

const H2 = styled.h2`
color: #333333;
font-size:18px;
margin-top:5vh;`

const SubmitPost = styled.button`
border:0;
background: #276F0F;
border-radius:3px;
margin: 10px 0;
padding:3px 10px;
color:white;
letter-spacing:2px;
font-size:18px;
transition: 1s ease-in;
:hover{background:#333333;
color:white;}`;

const UserPage = () => {

useProtectedPage();

const [title, handleTitle] = useInput()
const [text, handleText] = useInput()
const [body, setBody] = useState({})
const token = window.localStorage.getItem("token");
const headers = { Authorization: token }

const submitButton = (event) => {
setBody({title, text})
event.preventDefault()
}

const posting = useRequestPost("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", 
body, headers)

return (

<div> 
<Container>
<H2> O que está pensando?</H2>
<form onSubmit={submitButton}>
<Title value={title} onChange={handleTitle} type={"text"} placeholder={"digite aqui o título"}/>  
<Posting value={text} onChange={handleText} type={"text"} placeholder={"escreva aqui sua postagem"} />
<SubmitPost>Postar</SubmitPost>
</form>


<CardPost/> 

</Container>


</div>

)
}

export default UserPage
