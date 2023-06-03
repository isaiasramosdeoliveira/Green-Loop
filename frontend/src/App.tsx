import React from 'react';
import { Outlet } from 'react-router';
import Container from './patterns/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
