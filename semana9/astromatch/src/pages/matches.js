import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Matches() {
  const [userMatchs, setMatchs] = useState([]);

  getMatches = async () => {
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
  }, [userMatchs]);

  return (
    <div>
      {userMatchs.map((user) => {
        return user.name;
      })}
    </div>
  );
}

export default Matches;
