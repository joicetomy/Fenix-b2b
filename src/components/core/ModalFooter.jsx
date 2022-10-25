import React, { PureComponent } from 'react';
import { ModalFooter as RModalFooter } from 'reactstrap';

/** @class
 * This class is used as react-strap's ModalFooter Compontent
 */

class ModalFooter extends PureComponent {
  render() {
    return <RModalFooter {...this.props} />;
  }
}

export default ModalFooter;
