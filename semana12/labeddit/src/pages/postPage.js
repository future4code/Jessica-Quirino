import React, {useState} from 'react'
import styled from 'styled-components'
import useRequestPut from '../hooks/useRequestPut'
import useRequestGet from '../hooks/useRequestGet'
import FormComment from '../components/formComment'
import { useParams, useHistory } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectPage'

const Container = styled.div`
margin:0 auto;
padding:0;
width 70vw;
display:flex; 
justify-content: center;
align-items:center;
flex-wrap: wrap;`

const Card = styled.div`
width:98%;
margin:1%;
background: white;
p{padding:0 20px;}`

const CardComment = styled.div`
width:98%;
margin:1%;
background: #B9B9B9;
p{padding:0 20px;}`

const Name = styled.div`
font-size:20px;
color:#276F0F;
font-weight:300px;
padding-left:20px;
padding-top:20px;`

const Title = styled.div`
font-size:30px;
color:#333333;
font-weight:500px;
padding: 10px 20px;`

const FooterCard = styled.div`
width:100%;
display:flex;
justify-content: space-between;`

const Comment = styled.div`
width:76%;
background: #333333;
text-align:left; 
padding:2%;
color: white;`

const Vote = styled.div`
width:20%; 
display:flex;
justify-content: center;
align-items: center;
background:#276F0F;
text-align:center; 
color: white;
`;

const PostPage = () => {

useProtectedPage()

const params = useParams()
const history = useHistory()
const [body, setBody] = useState({})
const token = window.localStorage.getItem("token");
const headers = {Authorization: token}

const voteUp = (event) => {
setBody('"direction:" -1')
console.log(body)
}

const voteDown = (event) => {
setBody('"direction:" 1')
console.log(body)
}


const post = useRequestGet(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
{}, headers)

const postVoting = useRequestPut(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}/vote`, 
body, headers)

const commentsList = post.post &&  post.post.comments.map((posts) => {
console.log(posts)
return <CardComment key="posts.id">
<Name>{posts.username}</Name>
<p>{posts.text}</p>
</CardComment>
}); 


return (

<div> 
<Container>
{post.post && <Card>
<Name>{post.post.username}</Name>
<Title>{post.post.title}</Title>
<p>{post.post.text}</p>
<FooterCard><Comment>{post.post.commentsCount} comentários</Comment> 
<Vote>
<button onClick={voteUp}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg> 
</button>         
{post.post.votesCount}         
<button onClick={voteDown}>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
</button></Vote>
</FooterCard>
</Card>}

<FormComment/>

{commentsList}

</Container>
</div>
)
}

export default PostPage
