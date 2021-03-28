import React from "react";
import CreatePlaylists from "./components/createPlaylist";
import Playlists from "./components/playlists"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
library.add(faMusic);


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
    background:linear-gradient(to right, #9932CC, #FF1493);
    color:#ffffff;
    margin: 0;
    padding: 0;
    text-align:center;
    font-family: 'Montserrat', sans-serif;
    font-weight:500;
    font-size:18px;
    

  }
h2{font-size:40px;
margin-top:50px;
animation: bounce-top 0.9s both;}

@keyframes bounce-top {  
            0% {  
                opacity: 0;  
                -webkit-transform: translateY(-2000px);  
                -ms-transform: translateY(-2000px);  
                transform: translateY(-2000px);  
            }  
            60% {  
                opacity: 1;  
                -webkit-transform: translateY(-30px);  
                -ms-transform: translateY(-30px);  
                transform: translateY(-30px);  
            }  
            80% {  
                -webkit-transform: translateY(20px);  
                -ms-transform: translateY(20px);  
                transform: translateY(20px);  
            }  
  
            100% {  
                -webkit-transform: translateY(0);  
                -ms-transform: translateY(0);  
                transform: translateY(0);  
            }  
}


button{
  
margin: 10px;
  padding: 5px;
  color: white;
  font-weight: 700;
  text-transform:uppercase;
  letter-spacing:3px;
  font-family: "Montserrat", sans-serif;
  transition: 1s;
background: black;
border:0;
  :hover{
 
  color: #FF1493;
border:0
 }

`;


const Header = styled.div`
  width: 98%;
  padding: 1%;
  margin: 0px auto;
  background: black;
  display:flex;
  flex-direction: row;
 justify-content: space-between
  
`;

const Logotipo = styled.div`
  width: 250px;
color: white;
padding-top:5px;
font-size:25px;
font-weight: 700;
  text-transform:uppercase;
  letter-spacing:3px;
  font-family: "Montserrat", sans-serif;
  
`;
 

class App extends React.Component {

  state = {
    page: "playlists",
    button: ""
  };

  componentDidMount(){
    this.changePage();
  }

  changePage = () => {
    if (this.state.page === "createPlaylist") {
      this.setState({ page: "playlists" });
      this.setState({ button: "Crie sua playlist" });
    } else if (this.state.page === "playlists") {
      this.setState({ page: "createPlaylist" });
      this.setState({ button: "Veja suas playlists" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createPlaylist":
        return <CreatePlaylists />;
      case "playlists":
        return <Playlists />;
      default:
        return <div></div>;
    }
  };

  render() {
  
    return (
      <div>   <GlobalStyle />
           <Header><Logotipo> <FontAwesomeIcon icon="music" /> &nbsp; LABEFY </Logotipo><button onClick={this.changePage}>{this.state.button}</button></Header>


       {this.renderPage()}

   
      </div>
    );
  }
}

export default App;
