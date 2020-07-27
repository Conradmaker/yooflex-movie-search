import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import HomeContainer from "./container/HomeContainer";
import InformationContainer from "./container/InformationContainer";
import { Route } from "react-router-dom";
import DetailContainer from "./container/DetailContainer";

const Global = createGlobalStyle`
body{
  background:#424242;
  color:#e0e0e0;
}
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  color: #424242;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
  }
`;
export const Goback = styled.button`
  font-size: 25px;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  background: none;
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

export const GoHome = styled(Goback)`
  left: auto;
  right: 20px;
`;

function App() {
  return (
    <>
      <Global />
      <Route path="/" component={HomeContainer} exact />
      <Route path="/search/:text" component={InformationContainer} />
      <Route path="/detail/" component={DetailContainer} />
    </>
  );
}

export default App;
