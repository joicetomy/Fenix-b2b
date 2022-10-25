import React, { PureComponent } from 'react';
import { Alert as RAlert } from 'reactstrap';

/** @class
 * This class is used as react-strap's Alert Compontent
 */
class Alert extends PureComponent {
  render() {
    return <RAlert {...this.props} />;
  }
}

export default Alert;
