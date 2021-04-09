import React, { useEffect, useState } from "react";
import Matches from "./pages/matches";
import Initial from "./pages/initial";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";
import "./assets/css/fonts.css";
library.add(faHeart, faUsers);

const GlobalStyle = createGlobalStyle`

body{
background: linear-gradient(to right, #FF73FF, #FFB399 );
font-family: 'Poppins', sans-serif;
margin:0;
padding:0;
}

h1{margin-left: 20px;
color: #F74F96;
font-size:20px;
margin-bottom:30px;}
h1 a{font-size:25px;
  color: #25677a;
box-shadow: inset 0 -0.35em #FFA9A9;
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
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 1px 0px 0px rgba(10, 37, 59, 0.6);
`;

const Logo = styled.div`
  width: 260px;
  text-align: left;
  color: white;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 2px;
  padding-left: 20px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.93);
`;

const Cor = styled.span`
  color: #ffa9a9;
`;

const Users = styled.button`
  width: 30px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding-right: 40px;
  padding-top: 2px;
  background: none;
  border: 0;
`;

export default function App() {
  const [page, Setpage] = useState("initial");
  const [buttons, SetButtons] = useState(<FontAwesomeIcon icon="users" />);

 const changePage = () => {
    if (page === "initial") {
      Setpage("matches");
      SetButtons(<FontAwesomeIcon icon="users" />);
    } else if (page === "matches") {
      Setpage("initial");
      SetButtons(<FontAwesomeIcon icon="heart" />);
    }

    console.log(page);
  };

  const renderPage = () => {
    switch (page) {
      case "initial":
        return <Initial />;
      case "matches":
        return <Matches />;
      default:
        return <div></div>;
    }
  };

  useEffect(() => {
    renderPage();
  }, [""]);

  return (
    <div className="App">
      <GlobalStyle />
      <TelaContainer>
        <TelaFundo>
          <Menu>
            <Logo>
              a<Cor>m</Cor>
            </Logo>

            <Users onClick={changePage}>{buttons}</Users>
          </Menu>
          {renderPage()}
        </TelaFundo>
      </TelaContainer>
    </div>
  );
}
