import React from "react";
import styled from "@emotion/styled";
import { greenPrimary500 } from "../../global/variables/variables";

interface IMain {
  children: React.ReactNode;
}

const ContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 60px 1fr;
  height:100vh;
  background:${greenPrimary500};
  #aside {
    grid-area: 2/1/2/1;
  }
  #menu {
    grid-area: 1/1/1/3;
  }
  #content {
    grid-area: 2/2/2/2;
  }
`;

const Container = ({ children }: IMain) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
