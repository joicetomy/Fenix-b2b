import React, { PureComponent } from 'react';
import { ListGroupItem as RListGroupItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's ListGroupItem Compontent
 */

class ListGroupItem extends PureComponent {
  render() {
    return <RListGroupItem {...this.props} />;
  }
}

export default ListGroupItem;
