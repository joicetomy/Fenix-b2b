import React, { PureComponent } from 'react';
import { Collapse as RCollapse } from 'reactstrap';

/** @class
 * This class is used as react-strap's Collapse Compontent
 */

class Collapse extends PureComponent {
  render() {
    return <RCollapse {...this.props} />;
  }
}

export default Collapse;
