import React, { PureComponent } from 'react';
import { DropdownMenu as RDropdownMenu } from 'reactstrap';

/** @class
 * This class is used as react-strap's DropdownMenu Compontent
 */

class DropdownMenu extends PureComponent {
  render() {
    return <RDropdownMenu {...this.props} />;
  }
}

export default DropdownMenu;
