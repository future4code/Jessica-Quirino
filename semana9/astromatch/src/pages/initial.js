import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/card";
import ButtonChoice from "../components/button";
import axios from "axios";

function Initial() {
  const [userProfile, setProfile] = useState({});
  getProfile = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jessica-alcantara-quirino/person"
      );
      setProfile(res.data.profile);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Card userData={userProfile} />
      <ButtonChoice userData={userProfile} />
    </div>
  );
}

export default Initial;
