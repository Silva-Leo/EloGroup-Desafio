import React from "react";

import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 1020px) {
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Main;
