import React, { PureComponent } from 'react';
import { UncontrolledTooltip as RUncontrolledTooltip } from 'reactstrap';

/** @class
 * This class is used as react-strap's Alert Compontent
 */
class UncontrolledTooltip extends PureComponent {
  render() {
    return <RUncontrolledTooltip {...this.props} />;
  }
}

export default UncontrolledTooltip;
