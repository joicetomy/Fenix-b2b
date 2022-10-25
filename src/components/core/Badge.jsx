import React, { PureComponent } from 'react';
import { Badge as RBadge } from 'reactstrap';

/** @class
 * This class is used as react-strap's Badge Compontent
 */

class Badge extends PureComponent {
  render() {
    return <RBadge {...this.props} />;
  }
}

export default Badge;
