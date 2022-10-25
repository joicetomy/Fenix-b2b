import React, { PureComponent } from 'react';
import { Navbar as RNavbar } from 'reactstrap';

/** @class
 * This class is used as react-strap's Navbar Compontent
 */

class Navbar extends PureComponent {
  render() {
    return <RNavbar {...this.props} />;
  }
}

export default Navbar;
