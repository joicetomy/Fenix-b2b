import React, { PureComponent } from 'react';
import { Tooltip as RTooltip } from 'reactstrap';

/** @class
 * This class is used as react-strap's Tooltip Compontent
 */

class Tooltip extends PureComponent {
  render() {
    return <RTooltip {...this.props} />;
  }
}

export default Tooltip;
