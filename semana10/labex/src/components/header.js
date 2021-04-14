import React from "react";
import logo from '../img/logo.png'
import styled from 'styled-components'

const ContainerHeader = styled.div`
width: 80vw;
margin:0 auto;
`

const Admin = styled.button`
background: #2E1138 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'><path d='M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin-left:1vw;
padding:0 10px 0 35px;
border:0;
border-radius: 0 0 10px 10px;
font-size:0.90em;
color:white;
transition: 0.9s ease-in;
:hover{background-color: #961D41 ;}
`

const Logo = styled.div`
margin-top:10vh;
@media screen and (max-width: 900px) {
margin-top:5vh;}
`


function Header(){


    return <div>

<ContainerHeader> 
<Admin>admin</Admin>
        <Logo> <img src={logo}/></Logo>
        </ContainerHeader>
    </div>
}


export default Header