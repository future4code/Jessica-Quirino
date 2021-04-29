import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import useSend from '../hooks/useSend'
import useRequestData from '../hooks/useRequest'
import { useParams, useHistory } from 'react-router-dom'

const Container = styled.div`
margin:0px auto;
width 60vw;
display:flex; 
justify-content: center;
align-items:center;
flex-wrap: wrap;
`

const Card = styled.div`
width:100%;
margin:3vh 0 auto;
background: white;
p{padding:0 20px;}
`

const CardComment = styled.div`
width:100%;
margin:3vh 0 auto;
background: #B9B9B9;
p{padding:0 20px;}
`

const Name = styled.div`
font-size:20px;
color:#276F0F;
font-weight:300px;
padding-left:20px;
padding-top:20px;
`

const Title = styled.div`
font-size:30px;
color:#333333;
font-weight:500px;
padding: 10px 20px;
`


const FooterCard = styled.div`
width:100%;
display:flex;
justify-content: space-between;
`



const Comment = styled.div`
width:76%;
background: #333333;
text-align:left; 
padding:2%;
color: white;
`

const Vote = styled.div`
width:20%; 
display:flex;
justify-content: center;
align-items: center;
background:#276F0F;
text-align:center; 
color: white;
`

;


const Posting = styled.textarea`
background: white;
width:100%;
border:0;
:focus{
    border:2px solid #276F0F;
};
`

const H2 = styled.h2`
color: #333333;
font-size:18px;
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

const PostPage = () => {

    
const params = useParams()
const history = useHistory()
const [text, handleText] = useInput()
const [body, setBody] = useState({})
const token = window.localStorage.getItem("token");
const headers = {
    Authorization: token
  }

  const submitButton = (event) => {
    setBody({text})
    event.preventDefault()

    }



const post =useRequestData(
  `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
  {}, headers)



    const posting = useSend(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}/comment`, 
body, headers)


  

  const commentsList = post.post &&  post.post.comments.map((posts) => {
  console.log(posts)

  return <CardComment>
<Name>{posts.username}</Name>
  
  <p>{posts.text}</p>
  
  </CardComment>
  

}); 

  


return (<div> 

<Container>

{post.post && <Card>
<Name>{post.post.username}</Name>
<Title>{post.post.title}</Title>
      <p>{post.post.text}</p>
      <FooterCard><Comment>{post.post.commentsCount} comentários</Comment> 
       <Vote>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
           <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>  0 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </Vote></FooterCard>
  </Card>}




    <H2> Deixe seu comentário</H2>

    <form onSubmit={submitButton}>
<Posting value={text} onChange={handleText} type={"text"}  />
<SubmitPost>Enviar</SubmitPost>
</form>


{commentsList}

</Container>



                    </div>
    )
                
}


export default PostPage
