import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Homepage from './Homepage/Homepage';



//project list

import GridRepel from './projects/002/GridRepel';
import TriangleGrid from './projects/003/TriangleGrid';
import RainLines from './projects/004/RainLines';
import DiamondSquares from './projects/005/DiamondSquares';
import DiagonalLines from './projects/006/DiagonalLines';
import GridCircle from './projects/007/GridCircle';
import BurnItDown from './projects/008/BurnItDown';
import GeishaMask from './projects/009/GeishaMask';
import TextWaterfalls from './projects/010/TextWaterfalls';
import TextCircles from './projects/011/TextCircles';
import TextSpiralDiamond from './projects/012/TextSpiralDiamond';
import LetterEmitRitual from './projects/014/LetterEmitRitual';
import VortexRitual from './projects/013/VortexRitual';
import ColorCycleGrid from './projects/015/ColorCycleGrid';
import GlitchReveal from './projects/016/GlitchReveal';

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
    <Route exact path="/008">
    <GeishaMask/>
    </Route>
    <Route exact path="/009">
    <TextWaterfalls/>
    </Route>
    <Route exact path="/010">
    <TextCircles/>
    </Route>
    <Route exact path="/011">
    <TextSpiralDiamond/>
    </Route>
    <Route exact path="/012">
    <VortexRitual/>
    </Route>
    <Route exact path="/013">
    <LetterEmitRitual/>
    </Route>
    <Route exact path="/014">
    <ColorCycleGrid/>
    </Route>
    <Route exact path="/015">
    <GlitchReveal/>
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