import React, { PureComponent } from 'react';
import { PaginationLink as RPaginationLink } from 'reactstrap';

/** @class
 * This class is used as react-strap's PaginationLink Compontent
 */

class PaginationLink extends PureComponent {
  render() {
    return <RPaginationLink {...this.props} />;
  }
}

export default PaginationLink;
