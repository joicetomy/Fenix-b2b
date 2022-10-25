import React, { PureComponent } from 'react';
import { PaginationItem as RPaginationItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's PaginationItem Compontent
 */

class PaginationItem extends PureComponent {
  render() {
    return <RPaginationItem {...this.props} />;
  }
}

export default PaginationItem;
