import React from 'react';
import Home from './Home/Home';
import Nav from './Nav/Nav';

const Main = () => {

  return (
    <div className="main-container">
      <nav className="" role="">
        <div className="">
           <Nav />
            <Home />
        </div>
      </nav>
      <div className="">
      </div>
    </div>
  )
}

export default Main