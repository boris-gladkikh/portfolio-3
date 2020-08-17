import React from 'react';
import Project from './Project';
import {getAllProjects} from './APIHelper';

function Portfolio() {
  return(
    <div className="app">
      <h2 className="py-5">PORTFOLIO</h2>
      {/* <hr className="line m-auto" /> */}
      <h5>You can find some of my personal projects here.</h5>

    </div>
  )
}

export default Portfolio