import React, { PureComponent } from 'react';
import { NavLink as RNavLink } from 'reactstrap';

/** @class
 * This class is used as react-strap's NavLink Compontent
 */

class NavLink extends PureComponent {
  render() {
    return <RNavLink {...this.props} />;
  }
}

export default NavLink;
