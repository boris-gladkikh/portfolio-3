import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Homepage from './Homepage';
import GridRepel from './projects/002/GridRepel';
import TriangleGrid from './projects/003/TriangleGrid';

function Routes() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path="/about">
      <About />     
    </Route>
    <Route exact path="/portfolio">
      <Portfolio />
    </Route>
    <Route exact path="/001">
      <GridRepel />
    </Route>
    <Route exact path="/002">
    <TriangleGrid/>
    </Route>

    <Route exact path="/contact">
      <Contact />
    </Route>

    <Route exact path="/">
      <Homepage />
    </Route>

    <Redirect to="/" />
    </Switch>
    </>
  )
}

export default Routes