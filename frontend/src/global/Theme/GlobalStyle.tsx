import { Global, css } from "@emotion/react";

const style = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;