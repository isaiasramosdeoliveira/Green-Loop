import React from 'react';
import { Outlet } from 'react-router';
import Container from './patterns/Container';
import Content from './patterns/Content';
import Menu from './patterns/Menu';
import Aside from './patterns/Aside';
import styled from '@emotion/styled';

const AppStyled = styled.div` 
  height:100vh;
`;

function App() {
  return (
    <AppStyled className="App">
      <Container>
        <Menu/>
        <Aside/>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </AppStyled>
  );
}

export default App;
