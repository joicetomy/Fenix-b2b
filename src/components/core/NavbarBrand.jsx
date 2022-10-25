import React, { PureComponent } from 'react';
import { NavbarBrand as RNavbarBrand } from 'reactstrap';

/** @class
 * This class is used as react-strap's NavbarBrand Compontent
 */

class NavbarBrand extends PureComponent {
  render() {
    return <RNavbarBrand {...this.props} />;
  }
}

export default NavbarBrand;
