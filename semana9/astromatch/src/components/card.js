import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardAlign = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Name = styled.div`
  font-size: 24px;
  width: 225px;
  color: #25677a;
  font-weight: bold;
  text-align: left;
  padding-left: 5px;
`;

const Idade = styled.div`
  font-size: 12px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f74f96;
  color: white;
  font-weight: bold;
  border-radius: 50%;
`;

const Descricao = styled.div`
  font-size: 16px;
  width: 92%;
  padding: 4%;
  text-align: center;
  background: #f74f96;
  color: white;
`;

const Photo = styled.div`
  position: relative;
  width: 300px;
  height: 230px;
  overflow: hidden;
  margin-top: 10px;
  img {
    width: 100%;
    transform: translateY(-10%);
  }
`;

function Card(props) {
  return (
    <div>
      <CardAlign>
        <Name> {props.userData.name} </Name>
        <Idade> {props.userData.age} </Idade>
        <Photo>
          <img src={props.userData.photo} alt={props.userData.name} />
        </Photo>
        <Descricao> {props.userData.bio} </Descricao>
      </CardAlign>
    </div>
  );
}

export default Card;
