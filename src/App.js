import React from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// COMPONENTS
import Footer from './components/Footer.js'
import Navigation from './components/Navigation.js'
import Details from './components/Details.js'
import Copyright from './components/Copyright.js'
import Logo from './components/Logo.js'
import Location from './components/Location.js'
import Intro from './components/Intro.js'
import Overview from './components/Overview.js'

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["story", "common"]);


  return (
    <Suspense fallback={null}>
      <div className="is-preload">
        <div id="wrapper" className="fade-in">
          <Intro />
          <Logo />
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/details" element={<Details />} />
              <Route path="/location" element={<Location />} />
              <Route path="/gallery" element={<Details />} />
            </Routes>
          </Router>

          {/* <Main /> */}
          <Footer />
          <Copyright />
        </div>
      </div>
    </Suspense>


  )
}


export default App;
