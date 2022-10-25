import React, { PureComponent } from 'react';
import { Col as RCol } from 'reactstrap';

/** @class
 * This class is used as react-strap's Col Compontent
 */

class Col extends PureComponent {
  render() {
    return <RCol {...this.props} />;
  }
}

export default Col;
