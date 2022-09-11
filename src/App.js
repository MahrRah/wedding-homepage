import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// COMPONENTS
import Footer from './components/Footer.js'
import Navigation from './components/Navigation.js'
import Details from './components/details/Details.js'
import Copyright from './components/Copyright.js'
import Logo from './components/Logo.js'
import Location from './components/location/Location.js'
import Intro from './components/Intro.js'
import Overview from './components/overview/Overview.js'
import Gallery from './components/gallery/Gallery.js'
import Contacts from './components/contacts/Contacts.js'
import RsvpRequest from './components/rsvp/RsvpRequest.js';
import { useTranslation } from "react-i18next";
import { ParallaxProvider } from "react-scroll-parallax";
import { getAppInsights } from './TelemetryService';
import TelemetryProvider from './telemetry-provider';


function App() {
  
  let appInsights = null;
  
  function trackException() {
      appInsights.trackException({ error: new Error('some error'), severityLevel: SeverityLevel.Error });
  }

  function trackTrace() {
      appInsights.trackTrace({ message: 'some trace', severityLevel: SeverityLevel.Information });
  }

  function trackEvent() {
      appInsights.trackEvent({ name: 'some event' });
  }
  const { t } = useTranslation(["story", "common", "overview"]);

  return (
    <ParallaxProvider>
      <TelemetryProvider instrumentationKey="INSTRUMENTATION_KEY" after={() => { appInsights = getAppInsights() }}>
      <Suspense fallback={null}>
        <div className="is-preload">
          <div id="wrapper" className="fade-in">
            <Intro />
            <Logo />
            <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Overview t={t} />} />
                <Route path="/details" element={<Details />} />
                <Route path="/location" element={<Location />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rsvp" element={<RsvpRequest t={t} />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </Router>
            <Footer />
            <Copyright />
          </div>
        </div>
      </Suspense>
      </TelemetryProvider>
    </ParallaxProvider>
  )
}


export default App;
