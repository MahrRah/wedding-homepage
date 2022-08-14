import React, { Component } from 'react';
import '../assets/css/main.css'
import i18n from '../i18n.js';

import {
  Link,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
  }
  changeLocation = (route) => {
    return this.props.location.pathname === route ? "active" : null

  }

  useEffect = () => {
    const script = document.createElement('script');
    script.src = "../assets/js/main.js";
    script.async = true;
    script.type = "text/jsx"
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  render() {
    return (
      <nav id="nav">
        <ul className="links">
          <li className={this.changeLocation("/")}> <Link to="/">{this.props.t('common:overview')}</Link></li>
          <li className={this.changeLocation("/details")}> <Link to="/details">{this.props.t('common:details')}</Link></li>
          <li className={this.changeLocation("/location")}> <Link to="/location">{this.props.t('common:location')}</Link></li>
          <li className={this.changeLocation("/rsvp")}> <Link to="/rsvp">{this.props.t('common:rsvp')}</Link></li>
          <li className={this.changeLocation("/gallery")}> <Link to="/gallery">{this.props.t('common:gallery')}</Link></li>
        </ul>
        <ul className="icons">
          <li><a onClick={() => this.changeLanguage('en')}><span className="label">EN</span></a></li>
          <li><a onClick={() => this.changeLanguage('de')}><span className="label">DE</span></a></li>
        </ul>
      </nav>


    );
  }
}

export default () => {
  const location = useLocation();
  const { t } = useTranslation(["common"]);
  return (
    <Navigation t={t} location={location} />
  )
}