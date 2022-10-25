import React, { PureComponent } from 'react';
import { ModalHeader as RModalHeader } from 'reactstrap';

/** @class
 * This class is used as react-strap's ModalHeader Compontent
 */

class ModalHeader extends PureComponent {
  render() {
    return <RModalHeader {...this.props} />;
  }
}

export default ModalHeader;
