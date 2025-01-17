import React from "react";
import LandingPage from "./Landing";
import SetupForm from "./SetupForm";
import requiresAuthHOC from "pages/UserAuth/requiresAuthHOC";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCurrentUser } from "selectors/usersSelectors";
import { AUTH_LOGIN_URL } from "constants/routes";
import { Redirect } from "react-router";

const StyledSetupContainer = styled.div`
  background-color: ${(props) => props.theme.colors.homepageBackground};
  height: 100vh;
  overflow: auto;
`;

function Setup() {
  const user = useSelector(getCurrentUser);
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true);
  if (!user?.emptyInstance) {
    return <Redirect to={AUTH_LOGIN_URL} />;
  }
  return (
    <StyledSetupContainer>
      {showLandingPage ? (
        <LandingPage onGetStarted={() => setShowLandingPage(false)} />
      ) : (
        <SetupForm />
      )}
    </StyledSetupContainer>
  );
}

export default requiresAuthHOC(Setup);
