import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import BloomHeader from "./BloomHeader";
import Login from "./Login";
import Logout from "./Logout";
import View from "./View";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const username = localStorage.getItem("username");

  return (
    <AppContainer>
      <BloomHeader />
      <Header isLoggedIn={isLoggedIn} />
      <RouteContainer>
        <Route path="/view">
          <View setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/logout">
          <Logout setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </RouteContainer>
    </AppContainer>
  );
};

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'

const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`;
