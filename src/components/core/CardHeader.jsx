import React, { PureComponent } from 'react';
import { CardHeader as RCardHeader } from 'reactstrap';

/** @class
 * This class is used as react-strap's CardHeader Compontent
 */

class CardHeader extends PureComponent {
  render() {
    return <RCardHeader {...this.props} />;
  }
}

export default CardHeader;
