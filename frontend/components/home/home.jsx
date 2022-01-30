import React from 'react';
import Body from './body';
import HeaderContainer from './header_container';
import NavBarContainer from './nav_bar_container';

const Home = () => {
  return (
    <div>
      <HeaderContainer/>
      <NavBarContainer/>
      <Body/>
    </div>
    )
};

export default Home;
