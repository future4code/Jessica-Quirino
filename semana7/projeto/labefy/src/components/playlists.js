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


const Container = styled.div`

  display:inline-flex;
  width:50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top:100px;

  `

const Box = styled.div`
  background: #000000;
  width:150px;
 margin:20px;
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



class Playlists extends React.Component {
    state = {
    playlist: []
  };

  componentDidMount() {
    this.getPlaylists();
  }

 
 getPlaylists = async () => {
      try {
      const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
      
    {
          headers: {
            Authorization: "Jessica-Alcantara-Quirino-Cruz"
          }
      });
      console.log(res.data.result.list);
      this.setState({playlist: res.data.result.list});
      }

    catch (e) {
      console.log(e);
    }
    }

    
 
  deletePlaylist = async (id) => {
      try {
        const result = window.confirm("Deseja excluir o item");
    if (result == true) {
        const res = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: "Jessica-Alcantara-Quirino-Cruz"
            }
          });
        this.getPlaylists();
    }  

    
    }

    catch (e) {
      console.log(e);
    }
  }
  
  
  



  render() {
  
  
    const playList = this.state.playlist.map((play) => (
      <div key={play.id}>
 <Box>
        {play.name}
        <button onClick={() => this.deletePlaylist(play.id)}>X</button>
        </Box>
   </div>
    ));
  
  


    return (
      <div>
      
        <h2>
        <FontAwesomeIcon icon="play" /> Suas playlists
        </h2>
     
       
       <Container>{playList}</Container> 

        <Credit>
          <FontAwesomeIcon icon="heart" /> &nbsp; made with love by Jessica
        </Credit>
      </div>
    );
  }
}

export default Playlists;
