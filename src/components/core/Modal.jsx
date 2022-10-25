import React, { PureComponent } from 'react';
import { Modal as RModal } from 'reactstrap';

/** @class
 * This class is used as react-strap's Modal Compontent
 */

class Modal extends PureComponent {
  render() {
    return <RModal {...this.props} />;
  }
}

export default Modal;
