import logo from '../img/logo.png'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHome } from "../routes/coordinator";
import { goToLogin } from "../routes/coordinator";

const Nav = styled.nav`
background:white;
box-shadow: 0px 3px 8px -1px rgba(0,0,0,0.45);
width:98vw;
padding: 1vw;
margin:0;
display:flex; 
justify-content: space-around;`

const Logo = styled.div`
width:45vw;
padding-top:8px;`

const Buttons = styled.div`
width:30vw;
display:flex;
justify-content: flex-end;`

const ButtonLogin = styled.button`
border:0;
background: #276F0F;
border-radius:10px;
margin: 0 10px;
padding:3px 10px;
color:white;
letter-spacing:2px;
font-size:15px;transition: 1s ease-in;
:hover{background:#333333;
color:white;
}`

const ButtonSign = styled.button`
border: 2px solid #276F0F;
border-radius:10px;
padding:3px 10px;
color:#276F0F;
letter-spacing:2px;
font-size:15px;
transition: 1s ease-in;
:hover{background: #276F0F;
color:white;}`;

const Header = () => {

const history = useHistory()

return (

<div> 
<Nav>

<Logo onClick={()=> goToHome(history)}><img src={logo}/></Logo>

<Buttons>
<ButtonLogin onClick={()=> goToLogin(history)}>
Login
</ButtonLogin>
<ButtonSign onClick={()=> goToHome(history)}>Cadastro</ButtonSign>
</Buttons>

</Nav>
</div>

)
}

export default Header
    