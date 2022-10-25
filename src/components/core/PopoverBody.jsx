import React, { PureComponent } from 'react';
import { PopoverBody as RPopoverBody } from 'reactstrap';

/** @class
 * This class is used as react-strap's PopoverBody Compontent
 */

class PopoverBody extends PureComponent {
  render() {
    return <RPopoverBody {...this.props} />;
  }
}

export default PopoverBody;
