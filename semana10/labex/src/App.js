import './App.css';
import HomePage from './pages/homePage';
import ListTrip from './pages/listTripPage'
import Header from './components/header'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import back from './img/back.png'
import backmobile from './img/back-mob.png'
import "./assets/css/fonts.css";

const GlobalStyle = createGlobalStyle`

body{
  background: #E7E4E7 url(${back}) no-repeat top right;
  font-family: 'Poppins', sans-serif;}

  button{
    font-family: 'Poppins', sans-serif;
  }
  span{padding-top: 5px;
    padding-bottom:5px;
    border-bottom: 1px solid #DB4472;}

    h1{font-size:30px;
    color:white;
  }

  @media screen and (max-width: 900px) {
  body {
    background: #E7E4E7 url(${backmobile}) no-repeat top right;
  }


}
  `

const Main = styled.div`
width:80vw;
margin:0 auto;
margin-top:5vh;
`


function App() {
  return (
  <div>
    <GlobalStyle />     <Header/>
    <Main>
      <HomePage/>
  
      </Main>

      <ListTrip/>
  </div>
  );
}

export default App;
