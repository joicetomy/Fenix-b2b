import React, { PureComponent } from 'react';
import { DropdownItem as RDropdownItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's DropdownItem Compontent
 */

class DropdownItem extends PureComponent {
  render() {
    return <RDropdownItem {...this.props} />;
  }
}

export default DropdownItem;
