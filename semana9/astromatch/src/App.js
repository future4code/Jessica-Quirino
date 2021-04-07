import React from "react";
import Matches from "./pages/matches";
import Initial from "./pages/initial";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faUsers);

const GlobalStyle = createGlobalStyle`

body{
background: linear-gradient(to right, #FF73FF, #FFB399 );
font-family: 'Montserrat Alternates', sans-serif;
margin:0;
padding:0;
}
`;

const TelaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TelaFundo = styled.div`
  background: white;
  width: 300px;
  border-radius: 5px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #59b3cc;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Logo = styled.div`
  width: 260px;
  text-align: center;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 18px;
  font-family: "Montserrat Alternates", sans-serif;
  text-transform: uppercase;
`;

const Cor = styled.span`
  color: #f74f96;
`;

const Users = styled.div`
  width: 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding-right: 10px;
  padding-top: 2px;
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TelaContainer>
        <TelaFundo>
          <Menu>
            <Logo>
              A
              <Cor>
                <FontAwesomeIcon icon="heart" />
              </Cor>
              Match
            </Logo>

            <Users>
              <FontAwesomeIcon icon="users" />
            </Users>
          </Menu>
          <Initial />
          <Matches />
        </TelaFundo>
      </TelaContainer>
    </div>
  );
}
