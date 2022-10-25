import React, { PureComponent } from 'react';
import { Popover as RPopover } from 'reactstrap';

/** @class
 * This class is used as react-strap's Popover Compontent
 */

class Popover extends PureComponent {
  render() {
    return <RPopover {...this.props} />;
  }
}

export default Popover;
