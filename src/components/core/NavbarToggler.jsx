import React, { PureComponent } from 'react';
import { NavbarToggler as RNavbarToggler } from 'reactstrap';

/** @class
 * This class is used as react-strap's NavbarToggler Compontent
 */

class NavbarToggler extends PureComponent {
  render() {
    return <RNavbarToggler {...this.props} />;
  }
}

export default NavbarToggler;
