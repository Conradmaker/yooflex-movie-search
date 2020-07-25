import React from "react";
import { createGlobalStyle } from "styled-components";
import HomeContainer from "./container/HomeContainer";
import InformationContainer from "./container/InformationContainer";
import { Route } from "react-router-dom";

const Global = createGlobalStyle`
body{
  background:#424242;
  color:#e0e0e0;
}
`;

function App() {
  return (
    <>
      <Global />
      <Route path="/" component={HomeContainer} exact />
      <Route path="/search/:text" component={InformationContainer} />
    </>
  );
}

export default App;