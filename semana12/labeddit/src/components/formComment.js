import React, {useState} from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import useRequestPost from '../hooks/useRequestPost'
import useInput from '../hooks/useInput'

const PostComment = styled.textarea`
background: white;
width:98%;
margin:1%;
border:0;
border-bottom:2px solid #333333;
:focus{
border:2px solid #276F0F;
};`

const H2 = styled.h2`
color: #333333;
width:98%;
margin:1%;
text-align:center;
font-size:20px;
margin-top:10vh;`

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

const FormComment = () => {

const params = useParams()
const history = useHistory()
const [text, handleText] = useInput()
const [body, setBody] = useState({})
const token = window.localStorage.getItem("token");
const headers = {Authorization: token}

const submitButton = (event) => {
setBody({text})
event.preventDefault()
}

const postComments = useRequestPost(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}/comment`, 
body, headers)

return (

<div> 
<H2> Deixe seu comentário</H2>
<form onSubmit={submitButton}>
<PostComment value={text} onChange={handleText} type={"text"}  />
<SubmitPost>Enviar</SubmitPost>
</form>     
</div> 

)
}

export default FormComment
