import React from 'react';
import { Outlet } from 'react-router';
import Container from './patterns/Container';
import Content from './patterns/Content';
import Menu from './patterns/Menu';
import Aside from './patterns/Aside';

function App() {
  return (
    <div className="App">
      <Container>
        <Menu/>
        <Aside/>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </div>
  );
}

export default App;
