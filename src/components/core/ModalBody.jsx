import React, { PureComponent } from 'react';
import { ModalBody as RModalBody } from 'reactstrap';

/** @class
 * This class is used as react-strap's ModalBody Compontent
 */

class ModalBody extends PureComponent {
  render() {
    return <RModalBody {...this.props} />;
  }
}

export default ModalBody;
