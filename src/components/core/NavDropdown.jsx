import React, { PureComponent } from 'react';
import { NavDropdown as RNavDropdown } from 'reactstrap';

/** @class
 * This class is used as react-strap's NavDropdown Compontent
 */

class NavDropdown extends PureComponent {
  render() {
    return <RNavDropdown {...this.props} />;
  }
}

export default NavDropdown;
