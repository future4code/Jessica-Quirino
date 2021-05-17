import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faMinusCircle);
import styled from "styled-components";

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ButtonNo = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #25677a;
  color: #25677a;
  transition: 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  :hover {
    background: #25677a;
    color: white;
    border: 2px solid white;
  }
`;
const ButtonYes = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #f53486;
  color: #ffa9a9;
  transition: 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  :hover {
    background: #f53486;
    color: white;
    border: 2px solid white;
  }
`;

function ButtonChoice(props) {

  console.log(props.funct)
  const body = {
    id: props.userData.id,
    choice: true
  };


 
  const chooseProfile = async (id, choice) => {
    try {
      const res = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-alcantara-quirino/choose-person",
        body,
        {
          id,
          choice
        }
      );

      console.log("funcionou");
     ;
    } 
    
    catch (err) {
      console.log(err);
    }
  };

  const rejectProfile = () => {
    console.log("no");
    
  };

  return (
    <div>
      <ButtonSection>
        <ButtonNo onClick={rejectProfile}>
          <FontAwesomeIcon icon="minus-circle" />
        </ButtonNo>
        <ButtonYes onClick={chooseProfile}>
          <FontAwesomeIcon icon="heart" />
        </ButtonYes>
      </ButtonSection>
    </div>
  );
}

export default ButtonChoice;
