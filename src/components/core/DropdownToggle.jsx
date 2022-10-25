import React, { PureComponent } from 'react';
import { DropdownToggle as RDropdownToggle } from 'reactstrap';

/** @class
 * This class is used as react-strap's DropdownToogle Compontent
 */

class DropdownToggle extends PureComponent {
  render() {
    return <RDropdownToggle {...this.props} />;
  }
}

export default DropdownToggle;
