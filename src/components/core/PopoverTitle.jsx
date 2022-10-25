import React, { PureComponent } from 'react';
import { PopoverTitle as RPopoverTitle } from 'reactstrap';

/** @class
 * This class is used as react-strap's PopoverTitle Compontent
 */

class PopoverTitle extends PureComponent {
  render() {
    return <RPopoverTitle {...this.props} />;
  }
}

export default PopoverTitle;
