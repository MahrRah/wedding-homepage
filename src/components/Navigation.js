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
    this.state = { menuOn: false }
    this.changeLocation = this.changeLocation.bind(this);
    this.showNavbarMenu = this.showNavbarMenu.bind(this);
    // this.closeNavbarMenu = this.closeNavbarMenu.bind(this);
    this.wrapperRef = React.createRef();
    this.closeRef = React.createRef();
    // this.props.useOutsideAlerter(this.wrapperRef);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    // document.addEventListener('click', this.handleOutsideClick);
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
  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
  //     alert('you just clicked outside of box!');
  //     // this.setState({ meçnuOn: false });
  //   }
  //   else if (this.closeRef && !this.closeRef.current.contains(event.target)){
  //     console.log("dddd")
  //   //   this.setState({ menuOn: false });
  //   }
  // }


  render() {

    return (
      < ><nav ref={this.wrapperRef}  id="nav">
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
        <a ref={this.wrapperRef} id='navPanelToggle' onClick={this.showNavbarMenu} >Menu</a>
        {this.state.menuOn &&
          <div>

            <body className="is-navPanel-visible">
              <div   id="navPanel">
                <nav>
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
  // const useOutsideAlerter = (ref) => {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         alert("You clicked outside of me!");
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }
  
  const location = useLocation();
  const { t } = useTranslation(["common"]);
  return (
    <Navigation t={t} location={location} />
  )
}