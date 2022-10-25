import React, { PureComponent } from 'react';
import { PopoverContent as RPopoverContent } from 'reactstrap';

/** @class
 * This class is used as react-strap's PopoverContent Compontent
 */

class PopoverContent extends PureComponent {
  render() {
    return <RPopoverContent {...this.props} />;
  }
}

export default PopoverContent;
