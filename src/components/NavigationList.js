
import '../assets/css/main.css'

function Logo() {
  return (
    <><ul className="links">
      <li className={this.changeLocation("/")}> <Link to="/">{this.props.t('common:overview')}</Link></li>
      <li className={this.changeLocation("/details")}> <Link to="/details">{this.props.t('common:details')}</Link></li>
      <li className={this.changeLocation("/location")}> <Link to="/location">{this.props.t('common:location')}</Link></li>
      <li className={this.changeLocation("/rsvp")}> <Link to="/rsvp">{this.props.t('common:rsvp')}</Link></li>
      <li className={this.changeLocation("/gallery")}> <Link to="/gallery">{this.props.t('common:gallery')}</Link></li>
    </ul><ul className="icons">
        <li><a onClick={() => this.changeLanguage('en')}><span className="label">EN</span></a></li>
        <li><a onClick={() => this.changeLanguage('de')}><span className="label">DE</span></a></li>
      </ul></>
  )

}