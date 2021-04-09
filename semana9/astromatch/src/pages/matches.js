import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const Pic = styled.div`
  padding-left: 20px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid #ff95c9;
  }
`;
const Name = styled.div`
  padding-left: 10px;
  font-size: 15px;

  color: #25677a;
  font-weight: bold;
`;

const ButtonDelete = styled.button`
  background: #f74f96;
  border: 0px;
  padding: 8px;
  font-size: 15px;
  color: white;
  border: 3px solid #f74f96;
  transition: 0.2s ease-out;
  :hover {
    background: white;
    color: #f74f96;
    border: 3px solid #ffa9a9;
  }
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

function Matches() {
  const [userMatchs, setMatchs] = useState([]);

   const getMatches = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-alcantara-quirino/matches"
      );

      setMatchs(res.data.matches);
      console.log(userMatchs);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMatches();
  }, [getMatches]);

  const deleteMatch = async () => {
    try {
      const res = await axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-alcantara-quirino/clear "
      );
      console.log("deletou");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>
        <FontAwesomeIcon icon="heart" /> <a>seus matchs</a>{" "}
      </h1>
      {userMatchs.map((user) => {
        return (
          <Container>
            <Pic>
              <img src={user.photo} />
            </Pic>
            <Name>{user.name}</Name>
          </Container>
        );
      })}
      <Align>
        <ButtonDelete onClick={() => deleteMatch()}>Deletar todos</ButtonDelete>
      </Align>
    </div>
  );
}

export default Matches;
