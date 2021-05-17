import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faHeart,
  faSmile,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from "styled-components";
library.add(faCheckSquare, faHeart, faSmile, faPlay);



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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 250px;
  background: #000000;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #333333;
  padding-bottom: 5px;
`;

const Box = styled.div`
  width: 60%;
  padding: 5%;
  margin: 0px auto;
  border: 3px dotted black;
margin-top:5%;
margin-bottom:8%;
`;


const Input = styled.input`
  padding: 10px;
  margin: 10px;
  background: white;
  border: 2px solid black;
  display: flex;
  width: 88%;
  font-family: "Montserrat", sans-serif;
`;

const Buttonstyle = styled.button`
  margin: 10px;
  padding: 10px;
  background: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  border: 1px solid black;
  margin-bottom:40px;
  transition: 1s;
  :hover{background: #e8e8e8;
  color:black;
  border: 1px solid black;`

class CreatePlaylists extends React.Component {

  state = {
    inputName: "",
     
  };

  onChangeInputname = (event) => {
    this.setState({ inputName: event.target.value });
  };


  createPlaylist = async () => {
    const body = {
      name: this.state.inputName,
    };

    try {
      const res = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
          headers: {
            Authorization: "Jessica-Alcantara-Quirino-Cruz"
          }
        });
      console.log(res.data);
      this.setState({ inputName: res.data})
      alert("Playlist cadastrada com sucesso!");;
    } catch (e) {
      console.log(e);
    }
  };

  

  render() {
  
    return (
      <div>

     
        <h2>
        <FontAwesomeIcon icon="play" /> Crie sua playlist
        </h2>
        <Box>
          <label>
            Nome da sua playlist
            <Input
              value={this.state.inputName}
              onChange={this.onChangeInputname}
              placeholder={"digite aqui"}
            />
          </label>
        
          <Buttonstyle onClick={this.createPlaylist}>salvar</Buttonstyle>
        </Box>
      

        <Credit>
          <FontAwesomeIcon icon="heart" /> &nbsp; made with love by Jessica
        </Credit>
      </div>
    );
  }
}

export default CreatePlaylists;
