import React, { PureComponent } from 'react';
import { UncontrolledCollapse as RUncontrolledCollapse } from 'reactstrap';

/** @class
 * This class is used as react-strap's UncontrolledDropdown Component
 */

class UncontrolledCollapse extends PureComponent {
  render() {
    return <RUncontrolledCollapse {...this.props} />;
  }
}

export default UncontrolledCollapse;
