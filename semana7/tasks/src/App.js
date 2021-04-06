import React from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faHeart,
  faSmile,
  faThumbtack,
  fathumbTack
} from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from "styled-components";
library.add(faCheckSquare, faHeart, faSmile, faThumbtack);

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body {
    background: #5DA1A3;
    color:#ffffff;
    margin: 0;
    padding: 0;
    text-align:center;
    font-family: 'Montserrat', sans-serif;

  }
h2{font-size:23px;
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

  button{background: #CBE096;
  border:0;
  padding:9px;
  margin:20px;
  font-family: 'Montserrat', sans-serif;
  text-transform:uppercase;
  letter-spacing: 2px;
  font-weight:700;
  font-size:12px;
  color: #333333;}

`;

const Task = styled.div`
  display: inline-flex;

  background: #c6a5c5;
  padding: 3px;
  font-weight: 500;
  border-bottom: 1px solid #333333;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: left;
`;
const Type = styled.div`
  display: inline-flex;
  background: #efdb78;
  color: black;
  padding: 3px;
  font-weight: 500;
  border-bottom: 1px solid #333333;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

const Credit = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  background: #e5a3a3;
  padding: 5px;
  font-size: 12px;
  font-weight: 500;
  border-bottom: 1px solid #333333;
  padding-bottom: 5px;
`;

class App extends React.Component {
  state = {
    tasks: {}
  };

  getTasks = async () => {
    try {
      const res = await axios.get("https://www.boredapi.com/api/activity/");
      console.log(res.data);
      this.setState({ tasks: res.data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { activity, type, participants, price } = this.state.tasks;
    return (
      <div>
        <GlobalStyle />
        <h2>
          {" "}
          <FontAwesomeIcon icon="smile" /> &nbsp; are you boring?{" "}
        </h2>
        <button onClick={this.getTasks}>get a task</button>

        {this.state.tasks.activity && (
          <p>
            <Task>
              {" "}
              <FontAwesomeIcon icon="check-square" /> &nbsp; {activity}
            </Task>
          </p>
        )}

        {this.state.tasks.type && (
          <p>
            <Type>
              <FontAwesomeIcon icon="thumbtack" /> &nbsp; {type}
            </Type>
          </p>
        )}

        <Credit>
          <FontAwesomeIcon icon="heart" /> &nbsp; made with love by Jessica
        </Credit>
      </div>
    );
  }
}

export default App;
