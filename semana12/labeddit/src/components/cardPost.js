import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToPost } from '../routes/coordinator'
import useRequestData from '../hooks/useRequest'


const Section = styled.section`
margin-top:10vh;
display:flex; 
justify-content: space-around;
flex-wrap:wrap;`

const Card = styled.div`
width:60vw;
margin:3vh 0;
background: white;
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



const CardPost = () => {
const history = useHistory()
const token = window.localStorage.getItem("token");
const goToPost = (id) => {
  history.push(`postPage/${id}`);
  };


const headers = {
  Authorization: token
}
const posts = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {}, headers) 
 

const postsCard = posts.posts &&
posts.posts.map((post) => {

return  <Card>
<Name>{post.username}</Name>
<Title>{post.title}</Title>
      <p>{post.text}</p>
      <FooterCard><Comment key={post.id} onClick={ ()=> goToPost(post.id)}>{post.commentsCount} comentários</Comment> 
       <Vote>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
           <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>  0 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </Vote></FooterCard>
  </Card> ;     });  


    return (<div> 
    
    <Section>
    {postsCard}
  </Section>
                        </div>
        )
                    
    }
    
    
    export default CardPost
    