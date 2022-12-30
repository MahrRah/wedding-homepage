import React, { Component } from 'react';
import '../assets/css/main.css'
import '../assets/css/noscript.css'
import i18n from '../i18n.js';

import {
  Link,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOn: false }
    this.changeLocation = this.changeLocation.bind(this);
    this.showNavbarMenu = this.showNavbarMenu.bind(this);
    this.closeNavbarMenu = this.closeNavbarMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.wrapperRef = React.createRef();
    this.closeRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  changeLocation = (route) => {
    return this.props.location.pathname === route ? "active" : null
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  showNavbarMenu = () => {
    this.setState({ menuOn: true });
  }
  closeNavbarMenu = () => {
    this.setState({ menuOn: false });
  }
  handleClickOutside(event) {
    if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ menuOn: false });
    }
  }

  handleTab(event) {
    window.scrollTo(0, 500)
    this.setState({ menuOn: false });
  }
  render() {

    return (
      < ><nav id="nav">
        <ul className="links">
          <li className={this.changeLocation("/")}> <Link to="/">{this.props.t('common:overview')}</Link></li>
          <li className={this.changeLocation("/details")}> <Link to="/details">{this.props.t('common:details')}</Link></li>
          <li className={this.changeLocation("/location")}> <Link to="/location">{this.props.t('common:location')}</Link></li>
          <li className={this.changeLocation("/rsvp")}> <Link to="/rsvp">{this.props.t('common:rsvp')}</Link></li>
          {/* <li className={this.changeLocation("/gallery")}> <Link to="/gallery">{this.props.t('common:gallery')}</Link></li> */}
          <li className={this.changeLocation("/weddingparty")}> <Link to="/weddingparty">{this.props.t('common:weddingparty')}</Link></li>
          <li className={this.changeLocation("/contact")}> <Link to="/contact">{this.props.t('common:contacts')}</Link></li>
          {/* <li className={this.changeLocation("/faq")}> <Link to="/faq">FAQ</Link></li> */}
        </ul>
        <ul className="icons">
          <li><a onClick={() => this.changeLanguage('en')}><span className="label">EN</span></a></li>
          <li><a onClick={() => this.changeLanguage('de')}><span className="label">DE</span></a></li>
        </ul>
      </nav>
        <a id='navPanelToggle' onClick={this.showNavbarMenu} >Menu</a>
        {this.state.menuOn &&
          <div>

            <body ref={this.wrapperRef} className="is-navPanel-visible">
              <div id="navPanel">
                <nav>
                  <ul className="links">
                    <li className={this.changeLocation("/")} onClick={() => this.handleTab()}> <Link to="/">{this.props.t('common:overview')}</Link></li>
                    <li className={this.changeLocation("/details")} onClick={() => this.handleTab()}> <Link to="/details">{this.props.t('common:details')}</Link></li>
                    <li className={this.changeLocation("/location")} onClick={() => this.handleTab()}> <Link to="/location">{this.props.t('common:location')}</Link></li>
                    <li className={this.changeLocation("/rsvp")} onClick={() => this.handleTab()}> <Link to="/rsvp">{this.props.t('common:rsvp')}</Link></li>
                    {/* <li className={this.changeLocation("/gallery")} onClick={() => this.handleTab()}> <Link to="/gallery">{this.props.t('common:gallery')}</Link></li> */}
                    <li className={this.changeLocation("/weddingparty")} onClick={() => this.handleTab()}> <Link to="/weddingparty">{this.props.t('common:weddingparty')}</Link></li>
                    <li className={this.changeLocation("/contact")} onClick={() => this.handleTab()}> <Link to="/contact">{this.props.t('common:contacts')}</Link></li>
                  </ul>
                  <ul className="icons">
                    <li><a onClick={() => this.changeLanguage('en')}><span className="label">EN</span></a></li>
                    <li><a onClick={() => this.changeLanguage('de')}><span className="label">DE</span></a></li>
                  </ul>
                </nav>
                <a href="#navPanel" className="close" onClick={this.closeNavbarMenu} />
              </div>
            </body>
          </div>
        }
      </>


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