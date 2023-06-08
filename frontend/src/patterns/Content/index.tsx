import React from "react";
import styled from "@emotion/styled";
import {
  center,
  greenPrimary600,
} from "../../global/variables/variables";

interface IContent {
  children: React.ReactElement;
}

const ContentStyled = styled.section`
  ${center}
  padding: 22px;
  border-radius: 50px 0px 0px 0px;
  background: white;
  border: 1px solid ${greenPrimary600};
`;

const Content = ({ children }: IContent) => {
  return <ContentStyled id="content">{children}</ContentStyled>;
};

export default Content;
