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
    // let location = useLocation();
    console.log(route);
    console.log(this.props.location.pathname);
    return this.props.location.pathname === route ? "active" : null

  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  render() {
    return (
      <nav id="nav">
        <ul className="links">
          {/* {`banner ${changeLocation()==="/" ? "active" : ""}`} */}
          <li className={this.changeLocation("/")}> <Link to="/" >{this.props.t('overview')}</Link></li>
          <li className={this.changeLocation("/details")}> <Link to="/details">{this.props.t('details')}</Link></li>
          <li className={this.changeLocation("/location")}> <Link to="/location">{this.props.t('location')}</Link></li>
          <li className={this.changeLocation("/gallery")}> <Link to="/gallery">{this.props.t('gallery')}</Link></li>
          <li className={this.changeLocation("/rsvp")}> <Link to="/rsvp">{this.props.t('rsvp')}</Link></li>
        </ul>
        <ul className="icons">
          <li><a onClick={() => this.changeLanguage('en')}><span class="label">EN</span></a></li>
          <li><a onClick={() => this.changeLanguage('de')}><span class="label" >DE</span></a></li>
        </ul>
      </nav>
    );
  }
}

export default () => {
  const location = useLocation();
  const { t } = useTranslation(["story", "common", "overview"]);
  return (
      <Navigation t={t} location={location} />
  )
}