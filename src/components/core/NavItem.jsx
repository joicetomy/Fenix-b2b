import React, { PureComponent } from 'react';
import { NavItem as RNavItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's NavItem Compontent
 */

class NavItem extends PureComponent {
  render() {
    return <RNavItem {...this.props} />;
  }
}

export default NavItem;
