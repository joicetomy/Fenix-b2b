import React, { PureComponent } from 'react';
import { ListGroupItemHeading as RListGroupItemHeading } from 'reactstrap';

/** @class
 * This class is used as react-strap's ListGroupItemHeading Compontent
 */

class ListGroupItemHeading extends PureComponent {
  render() {
    return <RListGroupItemHeading {...this.props} />;
  }
}

export default ListGroupItemHeading;
