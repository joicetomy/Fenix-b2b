import React, { PureComponent } from 'react';
import { Pagination as RPagination } from 'reactstrap';

/** @class
 * This class is used as react-strap's Pagination Compontent
 */

class Pagination extends PureComponent {
  render() {
    return <RPagination {...this.props} />;
  }
}

export default Pagination;
