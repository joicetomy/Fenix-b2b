import React, { PureComponent } from 'react';
import { Row as RRow } from 'reactstrap';

/** @class
 * This class is used as react-strap's Row Compontent
 */

class Row extends PureComponent {
  render() {
    return <RRow {...this.props} />;
  }
}

export default Row;
