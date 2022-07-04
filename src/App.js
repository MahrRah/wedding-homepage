import React  from 'react';
import './assets/css/main.css'
import './assets/css/noscript.css'
import { Suspense } from 'react';

// COMPONENTS
import Footer from './components/Footer.js'
import Navigation from './components/Navigation.js'
import Copyright from './components/Copyright.js'
import Logo from './components/Logo.js'
import Intro from './components/Intro.js'
import Overview from './components/Overview.js'

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["story", "common"]);

  return (
    <Suspense fallback={null}>
      <head>
        <title>Mahra & Valentin</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </head>
      <body class="is-preload">
        <div id="wrapper" class="fade-in">
          <Intro />
          <Logo /> 
          <Navigation />
          <Overview />
          <Footer />
          <Copyright />

        </div>
      </body>
    </Suspense>
  )
}


export default App;
