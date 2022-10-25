import React, { PureComponent } from 'react';
import { Breadcrumb as RBreadcrumb } from 'reactstrap';

/** @class
 * This class is used as react-strap's Breadcrumb Compontent
 */
class Breadcrumb extends PureComponent {
  render() {
    return <RBreadcrumb {...this.props} />;
  }
}

export default Breadcrumb;
