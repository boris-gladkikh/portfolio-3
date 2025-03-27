import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Homepage from './Homepage';
import GridRepel from './projects/002/GridRepel';
import TriangleGrid from './projects/003/TriangleGrid';
import RainLines from './projects/004/RainLines';
import DiamondSquares from './projects/005/DiamondSquares';
import DiagonalLines from './projects/006/DiagonalLines';
import GridCircle from './projects/007/GridCircle';
import BurnItDown from './projects/008/BurnItDown';

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
    <Route exact path="/003">
    <RainLines/>
    </Route>
    <Route exact path="/004">
    <DiamondSquares/>
    </Route>
    <Route exact path="/005">
    <DiagonalLines/>
    </Route>
    <Route exact path="/006">
    <GridCircle/>
    </Route>
    <Route exact path="/007">
    <BurnItDown/>
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