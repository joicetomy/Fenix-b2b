import React, { PureComponent } from 'react';
import { ListGroup as RListGroup } from 'reactstrap';

/** @class
 * This class is used as react-strap's ListGroup Compontent
 */

class ListGroup extends PureComponent {
  render() {
    return <RListGroup {...this.props} />;
  }
}

export default ListGroup;
