import React, { PureComponent } from 'react';
import { PopoverHeader as RPopoverHeader } from 'reactstrap';

/** @class
 * This class is used as react-strap's LaPopoverHeaderbel Compontent
 */

class PopoverHeader extends PureComponent {
  render() {
    return <RPopoverHeader {...this.props} />;
  }
}

export default PopoverHeader;
