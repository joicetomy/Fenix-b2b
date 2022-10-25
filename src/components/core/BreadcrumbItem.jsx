import React, { PureComponent } from 'react';
import { BreadcrumbItem as RBreadcrumbItem } from 'reactstrap';

/** @class
 * This class is used as react-strap's BreadcrumbItem Compontent
 */
class BreadcrumbItem extends PureComponent {
  render() {
    return <RBreadcrumbItem {...this.props} />;
  }
}

export default BreadcrumbItem;
