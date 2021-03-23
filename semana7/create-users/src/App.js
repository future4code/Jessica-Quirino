import React from "react";
import styled from "styled-components";
import axios from "axios";
import NewUser from "./components/newUser";
import listUser from "./components/listUser";

class App extends React.Component {
  render() {
    return (
      <div>
        <NewUser />

        <button >veja todos os usuários cadastrados</button>
      </div>
    );
  }
}
export default App;
