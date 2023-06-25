import React from 'react';
import Navbar from './compoent/Nav';
import Body from './compoent/Body';
import Profile from './compoent/profile';
import Contact from './compoent/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Body />
      <Contact />
    </div>
  );
}

export default App;